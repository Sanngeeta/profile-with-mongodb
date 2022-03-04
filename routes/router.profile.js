const express=require('express')
const { createProfile, getProfileById, updateProfile, deleteById, getAllprofile } = require('../controller/controller.profile')
const router=express.Router()


router.post('/profiles',createProfile)
router.get('/',getAllprofile)
router.get('/profiles/:id',getProfileById)
router.put('/profiles/update/:id',updateProfile)
router.delete('/profiles/delete/:id',deleteById)

module.exports=router