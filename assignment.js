
let initialBalance = 1500;
let enterChoice;
let trans=[];
do{
        enterChoice = parseInt(prompt( "Enter your choice:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit"));
        switch(enterChoice){
        case 1:
     console.log("Your initial balance is ", initialBalance);
      break;
      case 2:
        let deposit=parseFloat(prompt("enter the amount you want to diposit")); 
        console.log("your diposited amount is " ,deposit);
         initialBalance = initialBalance+deposit;
        console.log("your new balance is", initialBalance);
        trans.push(`your diposited ammount `,deposit);
        
        break;
        case 3:
            let withdraw = parseFloat(prompt("enter the amount you want to withdraw"));
             console.log("your withdraw amount is " ,withdraw);
            if(withdraw>initialBalance){
                console.log("your are poor");
            }else{
               console.log("you balance after withdraw", initialBalance-withdraw); 
            }
            trans.push(`your withdrawn amount is`, withdraw);
            break;
            case 4:
            console.log("exiting.....");
            break;
            default:
                console.log("invalid choice. please enter 1,2,3, or 4")
            }
        }
    while(enterChoice !== 4);
     if(trans[0] === undefined){
        console.log("no transactions to display")
     }else{

         console.log("transactions history")
         for(i=0;i<trans.length;i++){
             console.log(trans[i]);
            }
        }
