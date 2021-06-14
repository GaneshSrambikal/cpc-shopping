var bgImages=[
    'https://assets.codepen.io/t-1/maksim-larin-jZyacqaR4iI-unsplash.jpg',
    'https://assets.codepen.io/t-1/daniel-storek-JM-qKEd1GMI-unsplash.jpg',
    'https://assets.codepen.io/t-1/felipepelaquim-6zO5VKogoZE-unsplash.jpg',
    
];
var offer = document.getElementById("offer");
var offerHeader = document.getElementById("offer-header");
var itemIndex = 1;
showItems(itemIndex);

function plusItem(n) {
  showItems(itemIndex += n);
}

function currentItem(n) {
  showItems(itemIndex = n);
}

function showItems(n) {
  var i;
  var items = document.getElementsByClassName("item");
  var bg = document.getElementById("bg-container");
  
//   var dots = document.getElementsByClassName("dot");
  if (n > items.length) {itemIndex = 1}    
  if (n < 1) {itemIndex = items.length}
  for (i = 0; i < items.length; i++) {
      items[i].style.display = "none";
      ;
  }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
if(itemIndex === 2){
    offer.style.color ="black";
    offerHeader.style.color ="black";
    
} else{ 
    offer.style.color ="whitesmoke";
    offerHeader.style.color ="whitesmoke";
}
  items[itemIndex-1].style.display = "flex";
  bg.style.backgroundImage = `url(${bgImages[itemIndex-1]})`  
//   dots[slideIndex-1].className += " active";
};