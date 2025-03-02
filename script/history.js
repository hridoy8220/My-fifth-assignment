


document.querySelectorAll('.Completed').forEach((button, index) => {
    button.addEventListener('click', function (event) {
        const content = document.getElementById("transection-History");

        
        const boxId = index === 0 ? "first-box" : "second-box" ;
        const taskBox = document.getElementById(boxId).innerText;
        const currentTime = new Date().toLocaleTimeString(); 

        const p = document.createElement("p");
        p.innerText = `Added successfully ${taskBox} time ${currentTime}`;
        content.appendChild(p);

        const totalCheckElement = document.getElementById("check-box");
        const totalTaskElement = document.getElementById("task");

        let totalCheck = parseInt(totalCheckElement.innerText, 10);
        let totalTask = parseInt(totalTaskElement.innerText, 10);

        totalCheckElement.innerText = totalCheck + 1; 
        totalTaskElement.innerText = totalTask - 1; 

        alert(" Boad are Added Successfully");
        if(totalTask===1){
            alert(" Congratulation! All  Board added succesfully");
        }
        else{
            console.log("ok")
        }

        disableButton(index);
    });
});


function disableButton(index) {
    document.querySelectorAll('.Completed')[index].disabled = true;
}


document.getElementById("clearHistory").addEventListener('click',function(event){


    const history=document.getElementById("transection-History");
    history.innerHTML=" ";

})









