const mongoose=require('mongoose')
const validator=require('validator')
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/profile'
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connection...');
}).catch((err)=>{
    console.log(err);
})



const profileCollection=mongoose.Schema({
    firstName:{
        type:String,
        required:true

    },
    lastName:{
        type:String,
        required:true
    }, 
    phone:{
        type:Number,
        required:[true,'User phone number required'],
        min:[10,'Your number should be of 10 digits only']
        
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Email id already exits!'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is Invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:[6,'Must be at least 6 ']

    }
})


const profile=mongoose.model('userProfile',profileCollection)

module.exports=profile

// sudo npm i -g @railway/cli