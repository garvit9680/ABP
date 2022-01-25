let list = document.getElementById("list");
let barBtn = document.getElementById("bar");
barBtn.onclick = ()=>{
    list.classList.toggle("show");
}
let links = document.querySelectorAll("#list a");
for(let i = 0; i < links.length; i++){
    links[i].onclick = ()=>{
        list.classList.remove("show")
    }
}
let body = document.querySelector("body")
let Btn = document.getElementById("button");
let sec1 = document.getElementById("sec1")
let pageD = document.querySelectorAll('.swiper-pagination-bullet');
let pageDot = document.getElementsByClassName("swiper-pagination-bullet")
console.log(pageDot)
let darkBtn = document.getElementById("darkBtn");
let bG = document.getElementById("bg");
console.log(pageD)
Btn.onclick = ()=>{
    darkBtn.classList.toggle("right");
    
    if(darkBtn.classList.contains("right")){
         bG.style.backgroundImage = "url(/bg_black.jpg)"
         sec1.style.color = "white";
       //body.style.backgroundColor = "black";
        for(let i = 0; i < pageDot.length; i++){
            pageDot[i].classList.add("dark")
            //console.log(pageDot[i])
        }
        //console.log(bG.style.backgroundImage = "url(/favicon/background.jfif) !important")
    }else{
        sec1.style.color = "black";
        bG.style.backgroundImage = "url(/images/bg3.jfif)"
        //body.style.backgroundColor = "white"
        for(let i = 0; i < pageDot.length; i++){
            pageDot[i].classList.remove("dark")
        }
    }
    //(darkBtn.classList.toggle("right")) ? body.style.backgroundColor = "black" : body.style.backgroundColor = "white";
};
let img = document.querySelectorAll(".ui");
for(let i = 0; i < img.length; i++){
    img[i].onload = ()=>{
        img[i].classList.remove("ui")
    }
}

let li = document.querySelectorAll("li");
console.log(li)
for(let l = 0; l < li.length; l++){
    li[l].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("que_arrow")){
            clickedLi = e.target.parentElement
            console.log(clickedLi)
        }else{
            clickedLi = e.target.parentElement.parentElement;
            console.log(clickedLi)
        }
        clickedLi.classList.toggle("showAnswer");
        //ansclick(clickedLi)
    })
}     
function ansclick(clickedLi){
let p = document.querySelectorAll('.faq-text p');
    for(let i = 0; i < p.length; i++){
        p[i].onclick = ()=>{
            clickedLi.classList.remove("showAnswer")
        }
    }
}
