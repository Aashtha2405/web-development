let button = document.getElementById("btn")

button.addEventListener("click",()=>{
    alert("button clicked")

    document.querySelector(".box").innerHTML = "<b>yaayyy you were clicked<b/> Enjoy your click!"
})