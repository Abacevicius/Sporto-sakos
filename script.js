
//paslepe visus elementus
const tabs = document.getElementsByClassName("tab")

const h1 = document.querySelector("h1")
 tabs[0].style.display = "block"
 const buttons = document.getElementsByTagName("button")

 
function showtab(evt, id) {
//paslepe visus kai paleidziama funkcija
for(let i = 0; i < tabs.length; i++) {
 tabs[i].style.display = "none"
 buttons[i].classList.remove("selected")
}
//rodo tik ta pagal id paleidziant funkcija
 document.getElementById(id).style.display = "block"
 //prideda select klase prie paspausto mygtuko
evt.currentTarget.classList.add("selected")
}