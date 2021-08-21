/*===== MENU SHOW =====*/
const menuShow = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const toggle = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU =====*/

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

/*===== CHANGE COLOR HEADER =====*/
