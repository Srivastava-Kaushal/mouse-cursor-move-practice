let main=document.querySelector("#main");
let crsr=document.querySelector(".cursor");
main.addEventListener("mousemove",function(event){
    crsr.style.top = event.pageY + "px";
    crsr.style.left=event.pageX+"px";
})