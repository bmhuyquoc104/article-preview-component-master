const btn = document.querySelector("#share__button");
console.log(btn);

btn.addEventListener("click",()=>{
    btn.classList.toggle("active");
})