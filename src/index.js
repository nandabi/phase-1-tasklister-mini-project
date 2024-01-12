document.addEventListener("DOMContentLoaded", () => {
  
  const submit = document.querySelector('form')
  const inputValue = document.querySelector('#new-task-description')
  const ul = document.querySelector('#tasks')

  function addTask (){
    const li =document.createElement('li')
    li.textContent=inputValue.value;
    ul.appendChild(li)

    function removeTask(){
      const removeBtn = document.createElement('button')
      removeBtn.textcontent = 'x'
      li.append(removeBtn);
      removeBtn.addEventListener('click',(e)=>{
        e.target.parentNode.remove();
      })
    }
    function selectpriority(){
      const dropdown=document.createElement('select')
      dropdown.innerHTML = optionvalue = "high" 

    }
 selectpriority()
 removeTask
    }

submit.addEventListener('submit',function(e){
  e.preventDefault();
  addTask()
})
})