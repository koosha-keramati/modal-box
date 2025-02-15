const openmodal = document.getElementById("open_btn");
const modal = document.querySelector(".modal-container")
const closemodal= document.querySelector(".closebtn");

openmodal.addEventListener('click', function(){
    modal.style.display="block"
})

closemodal.addEventListener('click', function(){
    modal.style.display="none"
})
window.addEventListener("click",function (event){
    if(event.target == modal){
        modal.style.display="none";
    }
})



