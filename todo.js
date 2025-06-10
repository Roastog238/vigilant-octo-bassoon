const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("text-box");
const taskDetails = document.getElementById("task-details");

let taskArr=[];
let showDetails=document.getElementById("details");

taskform.addEventListener("submit", function(e){
    e.preventDefault();
    const taskText=taskInput.ariaValueMax.trim();
    if(taskText==="")return;
    taskArr.push(taskText);
    renderTasks();
    taskInput.value="";
});
function renderTasks(){
    taskDetails.innerHTML=taskArr
    .map((task,index)=>{
        
        <li>
            <input type="checkbox" id="task-${index}"></input>
            <label for="task=-${index}">${task}</label>
        </li>
        return;
    })
    .join("");
}

