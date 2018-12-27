window.onload=function(){
    let tasklist=document.getElementById("tasklist")
    let newtask=document.getElementById("newtask")
    let addbtn=document.getElementById("addbtn")

    addbtn.onclick=function(){
        addNewTask()
     }
 
     newtask.addEventListener("keyup", function(ev){
         if(ev.keyCode==13){
             addNewTask() 
         }
     })

    let addNewTask=function(){
        let newTaskValue=newtask.value
        let newTaskListItem=document.createElement("li")
        newTaskListItem.innerText=newTaskValue
        newTaskListItem.className="list-group-item"

        newTaskListItem.onclick=function(e){
            if(e.target.className==="list-group-item"){
                e.target.className="list-group-item disabled"
            }else{
                e.target.className="list-group-item"
            }
        }

        tasklist.appendChild(newTaskListItem)
        newtask.value=""
    }
    
    
}