document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    let input=document.getElementById('new-task-description').value;
    const li =document.createElement("li");
    li.textContent=input;
    document.querySelector('#tasks').appendChild(li);
    document.querySelector('form').reset()

  })
});