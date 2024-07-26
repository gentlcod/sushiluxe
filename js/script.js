import Aos from "aos";
import 'aos/dist/aos.css'

// init Aos animation 
Aos.init({
    duration :1000,
    offset: 100,
});

// navbar stick on the top while scrolling 

const nav = document.getElementById('nav');

// Get the offset position of the navigation element
const sticky = nav.offsetTop;

// Function to add or remove the "sticky" class based on scroll position
function checkStickyNav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

// Add the scroll event listener to check the sticky nav on scroll
window.addEventListener('scroll', checkStickyNav);


const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
]