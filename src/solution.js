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

fetch("http://localhost:3000/ramens")
  .then(res => res.json())
  .then(ramenArr => {
    ramenArr.forEach(ramenObj => {
      renderImage(ramenObj)
    showRamen(ramenArr[0])
    })
  })

  
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

console.log(formatElement)

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