
const d =new Date();
const toFormat=d.toDateString();
document.getElementById("date").textContent=toFormat;


let Datee= document.getElementsByClassName("date-in");
const date =new Date();
const dateFormat=d.toDateString();
for(let i=0; i<Datee.length;i++){
    Datee[i].textContent=dateFormat;

}

 function changeColor(){
    let colors=["red","blue","purple","orange"];
    let randomColor=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=randomColor;
        
    
 }


 document.getElementById("Next-page").addEventListener("click",function(event){
            
    console.log("jjjjj")
       
            window.location.href="./main.html"

})
