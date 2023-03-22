const btnsend = document.querySelector("#btn-send");
const textInput = document.querySelector("#text-input");
const form = document.querySelector("form");
const sectionTasks = document.querySelector("section");

const apiUrl = "https://641523a34f32ca32918f7b5a.mockapi.io/tasks";

// async function sendInfo(){
//   if(!textInput.value) {
//     alert("La Tarea no Puede estar vacia") 
//     return;
//   }
// console.log(textInput.value)
// }

form.onsubmit = async function (event){
  event.preventDefault();
  if(!textInput.value) {
    alert("La Tarea no Puede estar vacia") 
    return;
  }

const response = await fetch(apiUrl,{
method:"POST",
headers:{
  "content-type":"application/json",
},
body:JSON.stringify({
  name: textInput.value,
  status: 1,
}),
});
const data = await response.json();
sectionTasks.innerHTML="";
getTasks();
}


async function getTasks(){
  const tasks = await fetch("https://641523a34f32ca32918f7b5a.mockapi.io/tasks")

  const dataTasks= await tasks.json();



 const MyTasks = Object(dataTasks);



 dataTasks.forEach((task) => {
      sectionTasks.innerHTML +=` <h2>${task.name}</h2>
    
    `;
  });
  
  
  




}

getTasks();