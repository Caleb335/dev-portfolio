const nav = document.getElementById("navbar")
const navButton = document.getElementById("nav-toggle")



const toggle = () => {
    let navItems = document.getElementById("nav-items")

    if (navItems.style.display === 'none') {
        navItems.style.display = "block"
    } else {
        navItems.style.display = "none"
    }
}