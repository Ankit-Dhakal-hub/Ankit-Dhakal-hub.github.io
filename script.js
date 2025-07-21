let modeBtn = document.querySelector("#modebtn")
let body = document.querySelector("body")
let h1 = document.querySelector("h1")
let h3 = document.querySelector("h3")
let h6 = document.querySelector("h6")
let heroText = document.querySelector(".hero-text")
let about = document.querySelector(".about")
let skillBox = document.querySelector("#skill-box")
let projectCard = document.querySelectorAll(".project-card")
let projectBtn = document.querySelectorAll(".project-button")
let contact = document.querySelector(".contact-sec")
let currMode = "light"
modeBtn.addEventListener("click",()=>{
    if (currMode === "light"){
        currMode = "dark"
        modeBtn.innerText = "Light Mode"
        modeBtn.style.backgroundColor = "white"
        modeBtn.style.color = "black"
        body.style.backgroundColor = "black"
        body.style.color = "white"
        h1.style.color = "white"
        h3.style.color = "white"
        h6.style.color = "white"
        heroText.style.color = "white"
        about.style.backgroundColor = "#011414"
        skillBox.style.backgroundColor = "#012121"
        skillBox.addEventListener("mouseover", ()=>{
            skillBox.style.boxShadow = "10px 10px 10px black"
        })
        skillBox.addEventListener("mouseout", ()=>{
            skillBox.style.boxShadow = "0px 0px 0px black"
        })
       projectCard.forEach((card)=>{
        card.style.backgroundColor = "#012121"
        card.addEventListener("mouseover", ()=>{
            card.style.boxShadow = "10px 10px 10px #011414"
        })
        card.addEventListener("mouseout", ()=>{
            card.style.boxShadow = "0px 0px 0px #011414"
        })
       })
       projectBtn.forEach((btn)=>{
        btn.style.boxShadow = "10px 10px 10px black"
       })
       contact.style.backgroundColor = "#011414"
       menuBar.style.backgroundColor = "#011414"

    }else{ 
        currMode = "light"
        modeBtn.innerText = "Dark Mode"
        modeBtn.style.backgroundColor = ""
        modeBtn.style.color = ""
        body.style.backgroundColor = ""
        body.style.color = ""
        h1.style.color = ""
        h3.style.color = ""
        h6.style.color = ""
        heroText.style.color = ""
        about.style.backgroundColor = ""
        skillBox.style.backgroundColor = ""
        skillBox.addEventListener("mouseover", ()=>{
            skillBox.style.boxShadow = ""
        })
        skillBox.addEventListener("mouseout", ()=>{
            skillBox.style.boxShadow = ""
        })
       projectCard.forEach((card)=>{
        card.style.backgroundColor = ""
        card.addEventListener("mouseover", ()=>{
            card.style.boxShadow = ""
        })
        card.addEventListener("mouseout", ()=>{
            card.style.boxShadow = ""
        })
       })
       projectBtn.forEach((btn)=>{
        btn.style.boxShadow = ""
       })
       contact.style.backgroundColor = ""
    }

})

// Hamburger menu
let menuIcon = document.querySelector(".menu-icon")
let menuBar = document.querySelector(".menu-bar")
let menuOpt = document.querySelectorAll(".menu-option")
let close = document.querySelector(".close")
menuIcon.addEventListener("click", ()=>{
    menuBar.style.display = "flex"
})

close.onclick = ()=>{
    menuBar.style.display = "none"
}
for (opt of menuOpt){
    opt.onclick = ()=>{
         menuBar.style.display = "none"
    }
}