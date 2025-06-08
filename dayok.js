function sum(...num){
    let result=0;
    num.forEach((value) => {
       result+=value; 
    });
    console.log(result);

    
}sum(1,2,3,4,5)

let r=[1,2,3,4];
let newArr=r.map((value,index)=>{
   return value *2;
});
console.log(newArr);