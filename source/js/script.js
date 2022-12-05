// Menu button script

const siteList = document.querySelector('.main-nav__wrapper');
const contactInfo = document.querySelector('.main-nav__contact-info');
const mainToggle = document.querySelector('.main-nav__toggle');

mainToggle.addEventListener('click', function() {
  if (siteList.classList.contains('site-list--closed')) {
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list--opened');
  } else {
    siteList.classList.add('site-list--closed');
    siteList.classList.remove('site-list--opened');
  }
  if (contactInfo.classList.contains('site-list--closed')) {
    contactInfo.classList.remove('site-list--closed');
    contactInfo.classList.add('site-list--opened');
  } else {
    contactInfo.classList.add('site-list--closed');
    contactInfo.classList.remove('site-list--opened');
  }
});
