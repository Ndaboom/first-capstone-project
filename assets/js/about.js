// HEADER POPUP SCRIPT

const toggleMenu = document.querySelector('.toggleNav');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close_icon');
const menuOptions = document.querySelectorAll('.popup_menu_option');

// Modal menu toggle
toggleMenu.addEventListener('click', () => {
  popup.classList.remove('hide');
});

// Close mobile menu
close.addEventListener('click', () => {
  popup.classList.add('hide');
});

// Add click listener to mobile menu
menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    popup.classList.add('hide');
  });
});