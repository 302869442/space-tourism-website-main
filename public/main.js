//get th3e button to close the nav
const closeNavigation = document.querySelector(".close-nav")
//get the button to open the nav
const openNavigation = document.querySelector(".open-nav")
//get the nav
const navigation = document.querySelector(".primary-navigation")

//add event listener to the button
closeNavigation.addEventListener("click", () => {
  //toggle the class
    navigation.classList.toggle("open")
    openNavigation.style.display = "block"
})
//add event listener to the button
openNavigation.addEventListener("click", () => {
    //toggle the class
    openNavigation.style.display = "none"
    navigation.classList.toggle("open")
}
)
//get all the links in the nav
const links = document.querySelectorAll(".primary-navigation .nav-link")
//when the window.href is the same as the link href
//add the class active
window.addEventListener("load", () => {
  links.forEach(link => {
    if (window.location.href === link.href) {
      link.classList.add("active")
    }
  })
}
)