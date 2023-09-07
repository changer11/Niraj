const data= require('./data')
for(i=0;i<data.length; i++){
   let particulerdata=data[i];
    console.log( "age=",particulerdata['age']);
    console.log("username=",particulerdata['username']);
}