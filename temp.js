const temp=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("from temp");
        resolve("resolved");
    },3000);

});

const fun=async ()=>{
    try{
        for(let i=0;i<3;i++){
            await temp;
            console.log("from inside fun");
        }
    }catch(err){
        console.log(err);
    }
}

fun();