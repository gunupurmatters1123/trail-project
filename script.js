const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-cart');
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });
}

let itemCount = Number(cartCount?.textContent || 0);

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    itemCount += 1;
    if (cartCount) {
      cartCount.textContent = itemCount;
    }

    button.textContent = 'Added';
    button.style.background = '#dcfce7';
    button.style.color = '#166534';

    setTimeout(() => {
      button.textContent = 'Add to cart';
      button.style.background = '#eef2ff';
      button.style.color = '#4f46e5';
    }, 1200);
  });
});

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = newsletterForm.querySelector('button');
    const input = newsletterForm.querySelector('input');

    if (button && input) {
      button.textContent = 'Subscribed';
      button.disabled = true;
      input.value = '';
      input.placeholder = 'Thanks for subscribing!';
    }
  });
}
