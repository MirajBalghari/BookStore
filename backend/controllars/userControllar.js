import userModul from "../modules/userModul.js";
import bcrypt from 'bcrypt' ;

export const signup =async (req, resp)=>{
    try {
        const {name, email, password}= req.body ;
        if (!name , !email ,!password) return resp.status(400).json({msg:'required all ' ,success:false})
        const result =await userModul.findOne({email}) ;
        if(result) return resp.status(400).json({msg: 'user is already exist',success:false}) ;
        const bcryptpassword = await bcrypt.hash(password, 10)  ;
       const data = await new userModul({name, email, password:bcryptpassword})
       const user= await data.save()
     return resp.status(200).json({user,msg:'Signup Successful', success :true})
    } catch (error) {
        resp.status(500).json({msg :'Internal error' ,error})
    }
}

export const login =async(req, resp)=>{
    try {
        const {email, password}= req.body 
        if(!email || !password) return resp.status(400).json({msg:'Email and Password are required',success:false}) 
        const user = await userModul.findOne({email}) ;
        if(!user) return resp.status(400).json({msg:'user not found Signup please ',success:false})
        const passwordMatch = await bcrypt.compare(password, user.password) ;
    if (!passwordMatch) return resp.status(400).json({msg:'password is wrong',success:false});

    return resp.status(200).json({msg: 'Login Successful',success:true, user})
    } catch (error) {
        resp.status(500).json({msg :'Internal error' ,error})
    }
}