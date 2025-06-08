//to get student names and grades 
//finding the average and declaring the remarks

let grade;
let name;
function addStudent(name,grade){
   let choice;
    do{
          choice = parseInt(prompt( "Enter your choice:\n1. Enter Name\n2. Grade\n3. Exxit"));
        switch(choice){
            case 1:
                name=prompt("enter the name");
                console.log("student name:"+name);
                break;
                case 2:
                    grade=parseFloat(prompt("enter the grade of the student"));
                    gradeArr.push( grade);
                    console.log("grade is:", grade);;
                    break;
                    case 3:
                        console.log("exiting..........")
                        break;
                        default:
                            console.log("please enter between 1-3");
                            break;
                        }
                    }while(choice != 3);
}

function calculateAverage(gradeArr){
    let average;
    for(i=0;i<gradeArr.length;i++){
        let sum=0;
        sum=sum+gradeArr[i];
    }
    average =sum/gradeArr.length;
    return average;
}

function determineClassPerformance(average)
{
    if(average>=90){
        console.log("........A...........");

    }else if(average>=80&&average<90){
        console.log("........B.......");
    }else if(average>=70 && average<80){
        console.log(".........C......");
    }else if(average>=60&&average<70){
        console.log("............D........");
    }else{
        console.log(".......F.........");
    }
}


let gradeArr=[];
let sum=[];

addStudent();
let result= calculateAverage(gradeArr);
determineClassPerformance(result)
