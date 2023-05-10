//variables
//displaying card destination
const menuContainer = document.getElementById("ramen-menu")
//card variables
const imageElement = document.querySelector('.detail-image')
const nameElement = document.querySelector('.name')
const restaurantElement = document.querySelector('.restaurant')
const ratingElement = document.getElementById('rating-display')
const commentElement = document.getElementById('comment-display')
//form variables
const formatElement = document.getElementById('new-ramen')

function fetchRequest(){
  return(
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(ramenArr => {
      ramenArr.forEach(ramenObj => {
        renderImage(ramenObj)
      showRamen(ramenArr[0])
      })
    }))
}
fetchRequest()

  
// first deliverable
function renderImage(ramenObj) {
  const img = document.createElement("img")

  //second deliverable
  img.addEventListener('click', () => showRamen(ramenObj))
  img.src = ramenObj.image
  menuContainer.append(img)
}

//second deliverable displaying ramen
function showRamen(ramenObj) {
  imageElement.src = ramenObj.image
  nameElement.textContent = ramenObj.name;
  restaurantElement.textContent = ramenObj.restaurant
  ratingElement.textContent = ramenObj.rating
  commentElement.textContent = ramenObj.comment
}

// console.log(formatElement)

//third deliverable
formatElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const newObj = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value
  }
  console.log(newObj)
  renderImage(newObj)
})




//variables
//displaying card destination
const menuContainer = document.getElementById('ramen-menu');
//card variables
const imageElement = document.querySelector('.detail-image');
const nameElement = document.querySelector('.name');
const restaurantElement = document.querySelector('.restaurant');
const ratingElement = document.querySelector('#rating-display');
const commentElement = document.querySelector('#comment-display');

//form variable
const formElement =document.getElementById('new-ramen');


fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(allRamen => {
    showRamen(allRamen[2]);
    allRamen.forEach(oneRamen => {
      renderImage(oneRamen)
    });
  }
  )
//first deliverable: render images
function renderImage(ramenObject){
  const img = document.createElement('img');
  //second deliverable: display ramen after clicking
  img.addEventListener('click', () => {
    showRamen(ramenObject);
  });
  img.src = ramenObject.image
  menuContainer.append(img)
}
//second deliverable: display first ramen
function showRamen(ramenObject){
  imageElement.src = ramenObject.image
  nameElement.textContent = ramenObject.name
  restaurantElement.textContext = ramenObject.restaurant
  ratingElement.textContent = ramenObject.rating
  commentElement.textContent = ramenObject.comment
}
//third deliverable: add new ramen nav bar
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value
    }
  console.log(newRamen)
  renderImage(newRamen)
  console.log(e)
});
