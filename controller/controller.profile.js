const model=require('../model/profile.model')


createProfile=async(req,res)=>{
    
    try{
    const users={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password        
    }
    console.log(users);

    const insertData= await model.insertMany(users)
    res.json({
        message:'New Profile Added',
        profile:insertData
    })
    }catch(err){
        console.log(err);
        res.json({
            message:'Email id already exits!',
            error:err
            
        })
    }
}




getProfileById=async(req,res)=>{
    try{
        const id=req.params.id
        const result=await model.findById(id)
        res.json({
            message:'Profile Data By Id!',
            profile_data:result
        })
        
    }catch(err){
        res.json({
            message:'Someting Went Wrong Page Not Found'
        })
    }
}




getAllprofile=async(req,res)=>{
    try{
        const allProfiles=await model.find({})
        res.send({
            message:'All Profiles!',
            profiles:allProfiles
        })
    }catch(err){
        res.send({message:'Data Not Found!',
        error:err})
    }
}




// updateProfile=async(req,res)=>{
//     try{
//         const _id=req.params.id
//         const update=await model.findByIdAndUpdate(_id,req.body)
//         console.log(update);
//         res.json({
//             message:'Updated Successfully!',
//             updated:update
//         })
//     }catch(err){
//         console.log(err);
//         res.json({
//             message:'Updated Failed'
//         })
//     }
// }


updateProfile=(req,res)=>{
    let profile={}
    if(req.body.firstName)profile.firstName=req.body.firstName
    if(req.body.lastName)profile.email=req.body.lastName
    if(req.body.phone)profile.phone=req.body.phone
    if(req.body.email)profile.email=req.body.email
    if(req.body.password) profile.password=req.body.password

    profile={$set:profile}
    model.update({_id:req.params.id},profile)
    .then(()=>{
        res.send(profile)
    }).catch((err)=>{
        res.send(err)
    })
    
}







deleteById=async(req,res)=>{
    try{
        const id=req.params.id
        const delProfile=await model.findByIdAndDelete(id)
        res.json({
            message:'Deleted Successfully!',
            del:delProfile
        })
    }catch(err){
        res.json({
            message:'Delete Failde',
            error:err
        })
    }

}



module.exports={createProfile,getProfileById,updateProfile,deleteById,getAllprofile}