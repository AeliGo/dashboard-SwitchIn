
export const RecursiveTree = ({data , pid=null}) => {
    let result =[];
    data.forEach((item) => {
        if(item['parent_id']===pid){
            const children=RecursiveTree({data,pid:item['id']})
            if(children.length>0){
                item['children']=children;
            }
            result.push(item);
        }
    });
    return result;
}

//遍历dataArr,取到children属性且length>0的ids
export const getParentId = (dataArr) => {
    let result=[];
    dataArr.forEach((item)=>{
        if(item['children']&&item['children'].length>0){
            result.push(`sub${item['id']}`);
        }
    })
    return result
}
