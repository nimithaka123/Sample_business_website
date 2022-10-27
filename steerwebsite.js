const toggle_button = document.getElementsByClassName('toggle-button')[0]
const navbar_links = document.getElementsByClassName('nav-bar-links')[0]

toggle_button.addEventListener('click', () => {
navbar_links.classList.toggle('active')
})