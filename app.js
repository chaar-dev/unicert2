// ><><><><><><><> navbar ><><><><><><><>

const navar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY > navar.offsetHeight) {
                navar.classList.add('scrolled');
            } else {
                navar.classList.remove('scrolled');
            }
        });
        
// ><><><><><><><> navbar ><><><><><><><>

// ><><><><><><><> Background ><><><><><><><>

  // Array of background images
  var images = [
    'assets/Imgs/header/banner1/background1.jfif',
    'assets/Imgs/header/banner1/background2.jfif',
    'assets/Imgs/header/banner1/background3.jfif',
    'assets/Imgs/header/banner1/background4.jfif',
    // Add as many images as you like
  ];

  var currentImageIndex = 0;

  function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % (images.length);
    document.querySelector('.banner1').style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
  }

  // Change background image every 3 seconds
  setInterval(changeBackgroundImage, 3000);

  // Initial background image setup
  window.onload = function() {
    document.querySelector('.banner1').style.backgroundImage = 'url(' + images[0] + ')';
  };
// ><><><><><><><> Background ><><><><><><><>

// ><><><><><><><> writing effect ><><><><><><><>
var str = "UNICERT";
var i = 0;

var word = document.querySelector('.banner2 .colored');

function addCharacter() {
  if (i < str.length) {
    word.textContent += str.charAt(i);
    i++;
  } else {
    word.textContent = "";
    i=0;
  }
}

var interval = setInterval(addCharacter, 500); // 500ms interval


// ><><><><><><><> Hovering For Icons ><><><><><><><>

if (window.matchMedia('(max-width: 992px)').matches) {
    var span = document.querySelector('.on-collapse');
    var navbar = document.querySelector('.navbar');
    var dropdowns = document.querySelectorAll('.navbar-links');
  
    var dropdownVisible = false;
  
    function toggleDropdowns() {
      dropdownVisible = !dropdownVisible; 
      dropdowns.forEach(function(dropdown) {
        dropdown.style.visibility = dropdownVisible ? 'visible' : 'collapse';
      });
      span.style.opacity = dropdownVisible ? '0' : '1';
      navbar.style.height = dropdownVisible ? '17em' : '3.5em' ;
    }
    
    span.addEventListener('click', toggleDropdowns);
  }