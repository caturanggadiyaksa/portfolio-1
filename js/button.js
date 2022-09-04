function humbergerMenu() {
    var x = document.getElementById("humberger-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function buttonTema() {
  var buttonAll= document.getElementById("all-button-tema");
  
  
  if (buttonAll.style.display === "block") {
    buttonAll.style.display = "none";
    console.log("tes");
    
  } else {
    buttonAll.style.display = "block";
    console.log("else");

    var elementButtonAll = document.getElementById("buttonAll")
    elementButtonAll.classList.toggle("button-all-theme")

    
  }
}