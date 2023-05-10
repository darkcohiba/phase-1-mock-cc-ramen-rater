document.addEventListener('DOMContentLoaded', () => {
    retrieveData()
})

function retrieveData(){
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => {
            // console.log(data)
        //wishlist of functions
        //render the nav bar items
        data.forEach((singleRamen)=> renderNavBarItems(singleRamen))
        //render detail section
        renderDetailSection(data[0])
        // add form function
        addNewRamen()
    })
};

// this is my function to render the nav bar items
function renderNavBarItems(singleRamen){
    const navBar = document.querySelector("#ramen-menu")
    // creating the images for each one
    let image = document.createElement("img")
    // updating image src
    image.src = singleRamen.image
    // image event listener not working...please help
    image.addEventListener("click", ()=>{renderDetailSection(singleRamen)})
    navBar.append(image)
}

function renderDetailSection(data){
    let comment = document.querySelector("#comment-display")
    let name = document.querySelector(".name")
    let restaurant = document.querySelector(".restaurant")
    let image = document.querySelector(".detail-image")
    let rating= document.querySelector("#rating-display")
    image.src = data.image
    comment.textContent = data.comment
    name.textContent = data.name
    restaurant.textContent = data.restaurant
    rating.textContent = data.rating
}

function addNewRamen(){
    const form = document.querySelector("#new-ramen")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        const newRamen = {
            "name": document.getElementById("new-name").value,
            "restaurant": document.getElementById("new-restaurant").value,
            "rating": document.getElementById("new-rating").value,
            "image": document.getElementById("new-image").value,
            "comment": document.getElementById("new-comment").value
        }
        renderNavBarItems(newRamen)
    });
}




