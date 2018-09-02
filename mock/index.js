"use strict"

const Mock=require('mockjs');


let db=Mock.mock({
  'data':{
    'list|6':[{
        'id':'@id', 
        'name|1':'@first',
        'email|1':'@email',
        'gender|1': ['Male', 'Female'],
        'age|18-32':1
      }],
    'total':55,
    'pageSize':6,       //_limit
  }
});
module.exports={
    [`GET /api/users`](req,res){  //`/api/users?_page=${page}&_limit=${PAGE_SIZE}`
        function callback(){
            res.status(200).json(db);
        }
        setTimeout(callback,500)
    },

    [`POST /api/users`](req,res){
        user=JSON.parse(req.body)
        user.id=Mock.mock('@id');
        const msg={'code':'1','msg':'add successfully',"user":user}
        res.status(200).json(msg);
    },
    [`PATCH /api/users`](req,res){
        user=JSON.parse(req.body)
        const msg={'code':'1','msg':'edit successfully'}
        res.status(200).json(msg);
    },
    [`DELETE /api/users`](req,res){
        const msg={'code':'1','msg':'delete successully'}
        res.status(200).json(msg)
    },
}
