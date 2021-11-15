const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('links-navbar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})