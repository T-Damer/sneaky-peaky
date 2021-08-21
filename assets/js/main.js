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

const navLink = document.querySelectorAll('.nav__link')
const navMenu = document.getElementById('nav-menu')

const linkAction = () => {
  navMenu.classList.remove('show')
}

navLink.forEach((link) =>
  link.addEventListener('click', linkAction)
)

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

window.addEventListener('scroll', scrollActive)

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(
          '.nav__menu a[href*=' + sectionId + ']'
        )
        .classList.add('active')
    } else {
      document
        .querySelector(
          '.nav__menu a[href*=' + sectionId + ']'
        )
        .classList.remove('active')
    }
  })
}

/*===== CHANGE COLOR HEADER =====*/
