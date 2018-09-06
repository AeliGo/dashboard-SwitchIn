"use strict"

const Mock=require('mockjs');
const qs=require('qs');

let usersListData=Mock.mock({
    'data|80-100':[{
        id:'@id', 
        name:'@name',
        phone: /^1[34578]\d{9}$/,
        email:'@email',
        'gender|1': ['Male', 'Female'],
        'age|11-99':1,
        avatar () {
            return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
        },
    }],
  });

let database=usersListData.data;


module.exports={
    [`GET /api/users/getTableData`](req,res){ 
        const data=qs.parse(req.query);
        let { currentPage, pageSize,...other}=data;
        currentPage=currentPage || 1
        pageSize=pageSize || 10

        setTimeout(()=>{
            let newdata=database;
            res.status(200).json({
                data: newdata.slice((currentPage - 1) * pageSize, currentPage * pageSize),
                currentPage:currentPage,
                pageSize:pageSize,
                totalItems: newdata.length,
                result: 0
            });
        },500)
    },

    [`POST /api/users/save`](req,res){
        res.status(200).json({'result':'0','msg':'Add Successfully'});
    },
    [`POST /api/users/edit`](req,res){
        res.status(200).json({'result':'0','msg':'Edit Successfully'});
    },
    [`POST /api/users/delete`](req,res){
        res.status(200).json({'result':'0','msg':'Delete Successfully'})
    },
}
