const taskInput = document.getElementById("task-form");

const ul = document.getElementById('task-list')
taskInput.addEventListener('submit', (e) => {
   e.preventDefault()
    const value =  e.target.querySelector('#task-input').value
    const li = document.createElement('div')
    li.textContent = value
   
  
   const editButton = document.createElement('button')
   editButton.innerHTML = "edit"
   li.appendChild(editButton)
   editButton.addEventListener('click',(e)=>{
      const newValue = prompt("Enter new task text:");
      if (newValue !== null) {
         // Update the text content of the task <div> element with the new value
         li.textContent = newValue;
         li.appendChild(editButton)
         li.appendChild(deleteButton)
     }
 });
   
   const deleteButton = document.createElement('button')
   deleteButton.innerHTML = "delete"
   li.appendChild(deleteButton)

   deleteButton.addEventListener('click',(e)=>{
      e.target.parentNode.remove()
   })


   ul.appendChild(li)
   e.target.reset()
});
