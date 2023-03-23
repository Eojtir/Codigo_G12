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

form.onsubmit = async function (event) {
  event.preventDefault();
  if (!textInput.value) {
    alert("La Tarea no Puede estar vacia");
    return;
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: textInput.value,
      status: 1,
    }),
  });
  const data = await response.json();
  sectionTasks.innerHTML = "";
  




};

async function getTasks() {
  const tasks = await fetch(
    "https://641523a34f32ca32918f7b5a.mockapi.io/tasks"
  );

  const dataTasks = await tasks.json();

  const MyTasks = Object(dataTasks);

  dataTasks.forEach((task) => {
    sectionTasks.innerHTML += ` 
      <div class= "card mt-3">
        <div class = "card-body">
          <div><h4 id="name-${task.id}">${task.name}</h4></div>
          <div>
          <button class = "btn btn-primary">Terminado</button>
          <button onclick="updateTask('${task.id}','${task.name}' ) "class = "btn btn-warning">Editar</button>
          <button onclick="deleteTask(this)" data-id="${task.id}" class = "btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    `;
  });
}


async function deleteTask(element){
  const id = element.dataset.id;
  console.log(id);
    const response = await fetch (`${apiUrl}/${id}` , {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },


    });

    if(!response.ok){
      alert("Algo salio Mal");
      return;
    }

    // element.parentElement.parentElement.parentElement.style.display = "none";
    element.closest(".card").style.display = "none";

};

async function updateTask(id,tarea){
    const newText = prompt("Actualice la tarea",`${tarea}`);
    if(!newText){
      alert("la tarea no puede estar vacia");
      return;
    }

    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: newText,
        }),
    });
    if (!response.ok) {
      alert("Hubo un error");
      return;
    }
  
    const textTask = document.querySelector(`#name-${id}`);
    textTask.textContent = newText; 
}

function renderTask(task) {
  return


}
getTasks();
