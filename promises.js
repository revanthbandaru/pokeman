let result = new Promise(function(resolve,reject){
    if(10>10){
        reject('failed');
    }else{
         resolve('success');
    }
});
result.then((data)=>{
    console.log("then block "+data);
}).catch((error)=>{
    console.log("catch block "+error);
});
let employeeData = new Promise(function(resolve,reject){
    const employee = [
        {
            name : 'sharukh',
            age  :21,
        },
        {
            name  :'deepika',
            age   : 23,
        },
        {
            name  :'dheeraj',
            age   :25,
        }
    ];
    if(10>10){
        reject('failed');
    }else{
         resolve(employee);
    }
});
employeeData.then((data)=>{
    // console.log("then block ",data);
    return data;
}).catch((error)=>{
    // console.log("catch block ",error);
}).then(function(data){
    console.log('this is then block 2',data);
});