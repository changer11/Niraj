let array=[50,82,99,54,545,5556,44,4,122,4,55];
array.sort((a,b)=>{return a-b});
console.log(array);
for(i=0;i<array.length; i++){
    if(i%2===0){
        console.log(i,"even");
    }else{
        console.log(i, "odd")
    }
}