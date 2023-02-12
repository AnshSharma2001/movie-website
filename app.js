const arrows = document.querySelectorAll(".arrow"); 
const movieLists = document.querySelectorAll(".movie-list"); 

arrows.forEach((arrow, i) => {
    const itemLen = movieLists[i].querySelectorAll("img").length; 
    let clickCounter = 0; 
    arrow.addEventListener("click", (e) => {
        clickCounter++; 
        if(itemLen - ( Math.floor(window.innerWidth/270) + clickCounter) + 1>= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value
            -300}px)`;
        }
        else {
            movieLists[i].style.transform = "translateX(0)"; 
            clickCounter = 0; 
        }

        console.log("Floor" + Math.floor(window.innerWidth/270));
        console.log("Shouldn't be negative: ", (itemLen - ( Math.floor(window.innerWidth/270) + clickCounter)))
        
    })

})

const toggleBall = document.querySelector(".toggle-ball"); 
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle"); 

toggleBall.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active"); 
    })

    toggleBall.classList.toggle("active"); 
});

const menuList = document.querySelectorAll(".menu-list-item, .menu-list-item.active"); 
console.log(menuList); 

menuList.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.classList.add("active"); 
        menuList.forEach((item2, index2) => {
            if(index2!=index){
                item2.className = "menu-list-item"; 
            } 
        })
    })
})