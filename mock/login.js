"use strict"

const Mock=require('mockjs');
const qs=require('qs')


module.exports={
    // //login
    [`GET /api/login`](req,res){ 
        const data=qs.parse(req.query);
        setTimeout(()=>{
            if(data&&data.uname=='admin'&&data.upwd=='admin'){
                res.status(200).json({code:0,msg:'login successfully'})
            }else{
                res.status(200).json({code:1,msg:'Username or Password Wrong !'})
            }
        },1000)
    },

}
