let heart = document.getElementById("heart");
let boxCard = document.getElementById("image-container");
let menuHeart = 0;
let boxMenu = 0;
heart.addEventListener("click", function () {
  switch (menuHeart) {
    case 0:
      document.getElementById("first").classList.add("displaynone");
      document.getElementById("second").classList.remove("displaynone");
      menuHeart++;
      return;
    case 1:
      document.getElementById("second").classList.add("displaynone");
      document.getElementById("third").classList.remove("displaynone");
      menuHeart++;
      return;
    case 2:
      document.getElementById("fourth").classList.remove("displaynone");
      document.getElementById("third").classList.add("displaynone");
      menuHeart++;
      return;
      case 3:
        document.getElementById("heart").classList.add("noHeart");
        setTimeout(function(){
        document.getElementById("heart").classList.remove("noHeart");
        document.getElementById("heart").classList.add("displaynone");
      }, 2000);
      setTimeout(function(){
        document.getElementById("image-container").classList.remove("displaynone");
      },2500);
      menuHeart++;
      return;
  }
});

boxCard.addEventListener('click', function(){
  switch(boxMenu){
    case 0:
        document.getElementById("text-container").innerHTML = "No hay nada que no quiera darte, porque me das amor y lo unico que yo quiero es amarte";

        boxMenu++;
    return;
    case 1:
      document.getElementById("img").src = "./assets/img/foto-2.jfif";
      document.getElementById("text-container").innerHTML = "Gracias por todos los momentos que pasamos juntos, por cada risa, por cada abrazo, por cada lagrima y cada consuelo";
      boxMenu++;
      return;
    case 2:
      document.getElementById("img").src = "./assets/img/foto-3.jfif";
      document.getElementById("text-container").innerHTML = "Y aunque pase el tiempo no puedo dejar de pensar en vos, en tu sonrisa y en la alegria que me transmitis. Este deseo de seguir";
      boxMenu++;
    return;
    case 3:
      document.getElementById("img").src = "./assets/img/foto-4.jpg";
      document.getElementById("text-container").innerHTML = "Para finalizar esta carta, quiero decirte que estoy agradecido por todo lo que me das, y aunque la palabra siguiente no defina por completo lo que siento al verte, Te amo...";
      boxMenu++;
      return;
      case 4:
      fadeOutEffect();
      setTimeout(() => {
        document.getElementById("image-container").classList.add("displaynone");
      }, 2000);
      setTimeout(function(){
        fadeIn();
      }, 3000);
      return;
    }
})


function fadeIn() {
  setInterval(show, 200);
}

function show() {
  var body = document.getElementById("flower-box");
  body.style.display = "inline-block";
  opacity = Number(window.getComputedStyle(body)
                   .getPropertyValue("opacity"));
  if (opacity < 1) {
      opacity = opacity + 0.1;
      body.style.opacity = opacity
  } else {
      clearInterval(intervalID);
  }
}

function fadeOutEffect() {
  var fadeTarget = document.getElementById("image-container");
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, 200);
}
