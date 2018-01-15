var hamburger = document.querySelector(".nav-block__mobile-hamburger");
var navigation = document.querySelector(".nav-block__navigation");
var closeBtn = document.querySelector(".nav-block__mobile-close");

hamburger.addEventListener("click", function(event1) {
   event1.preventDefault();
   navigation.classList.add("nav-block__show-btn");
   hamburger.classList.add("nav-block__hidden-btn");
   closeBtn.classList.add("nav-block__show-btn");
});

closeBtn.addEventListener("click", function(event2) {
    event2.preventDefault();
    navigation.classList.remove("nav-block__show-btn");
    closeBtn.classList.remove("nav-block__show-btn")
    hamburger.classList.remove("nav-block__hidden-btn");
});

var navItems = document.querySelector(".nav-block__items");
var navElement = document.querySelector(".nav-block__items::before")
navItems.addEventListener("mouseover", function(event3) {
    event3.preventDefault();
    navElement.classList.add("nav-block__show-btn");
});