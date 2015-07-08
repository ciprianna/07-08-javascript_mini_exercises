function shrinkHeader(){
  head = document.getElementById("head");
  if (window.pageYOffset > 50 ){
    head.style.fontSize = "22px";
  } else {
    head.style.fontSize = "30px";
  }
}

window.addEventListener("scroll", shrinkHeader);
