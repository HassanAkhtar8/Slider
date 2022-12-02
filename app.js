const slider = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let counter = 0;
slider.forEach(function(slide, index){
slide.style.left = `${index * 100}%`;
});
next.addEventListener("click", function(){
      counter++
      car()
});
prev.addEventListener("click", function(){
      counter--;
      car()
});
function car(){
      if(counter === slider.length){
            counter = 0;
      }
      if(counter<0){
            counter = slider.length - 1;
      }
      slider.forEach(function(slide){
            slide.style.transform =`translateX(-${counter * 100}%)`
      });
}