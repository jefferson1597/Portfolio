const menuLinks = document.querySelectorAll('.bar a[href^="#"]');

menuLinks.forEach(item => {
  item.addEventListener('click', scrollToId)
})

function scrollToId(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 30,
    behavior:"smooth",
  })
} 