// var x=1;
// var y=2;
// console.log("add",x+y);
// console.log("sub",x-y);
// console.log("mul",x*y);
// console.log("divide",x/y);
// console.log("mod",x%y);
// console.log("exponential",x**y);

// let age= 17;
// let minAge=18;
// let hasLicense=true;
// let aduult=false;
// console.log("elligible:",(age>=18)&&hasLicense);
// console.log("user has lisence:",!hasLicense);
// console.log("can drive:",aduult&&hasLicense);

let x=6;
let y=7;
let z=5;
if(x>y&&x>z){
    console.log("x is greatest");}
    else if (y>x&&y>z){
   console.log("y is greatest")
    }else if(z>x&&z>y){
    console.log("z is greatest");
}
if(x>y&&x<z){
    console.log("x is second greatest");
}else if(x<y&&x>z)
{
console.log("x is second greatest");
}
else if(y>x&&y<z){
    console.log("y is second greatest");}
    else if(y<x&&y>z){
        console.log("y is second greatest");
    }
    else {
        console.log("z is second greatest");
    }

     function bas(num,num2,opr){
        let result= num + opr + num2
        console.log(eval(result));
    }
    bas(2,2,'*')


    function bas2(num1,num2,opr){
        switch(opr){
            case '*':
                console.log("1 , 2, *  =",num1*num2);
                break;
                default:
                    console.log("ok");
        }
    }
  bas2(1,2,'*');

  let roshan=(r,k )=>{return r+k};
console.log(roshan(2,3));

say_hello();
function say_hello(){
    console.log("my roshan is name khanal")
}
    //SWITCH CASE
   