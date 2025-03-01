document.getElementById('Completed').addEventListener('click',function(event){
    
    const content=document.getElementById("transection-History");
    const firstBox=document.getElementById("first-box").innerText;
      const p= document.createElement("p");
      const toFormat=d.toLocaleTimeString();
      p.innerText=`
      added succesfully ${firstBox} time ${toFormat}
    
      `
    content.appendChild(p)
    const totalCheck=document.getElementById("check-box").innerText;
    const sum=totalCheck-1;
    document.getElementById("check-box").innerText=sum;
    


})
function disableButton(){
    document.getElementById('Completed').disabled=true;
}