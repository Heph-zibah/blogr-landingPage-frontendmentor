const arrowDown1 = document.querySelector('.arrow-down1');
const arrowDown2 = document.querySelector('.arrow-down2');
const arrowDown3 = document.querySelector('.arrow-down3');
const arrowUp1 = document.querySelector('.arrow-up1');
const arrowUp2 = document.querySelector('.arrow-up2');
const arrowUp3 = document.querySelector('.arrow-up3');
const productModal = document.querySelector('.product-modal');
const companyModal = document.querySelector('.company-modal');
const contactModal = document.querySelector('.contact-modal');
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');

arrowDown1.addEventListener('mouseover', () => {
    console.log(arrow1);
    productModal.style.display = 'block';
    arrow1.style.display = 'none';
    arrowUp1.style.display = 'inline';
});
arrowDown1.addEventListener('click', () => {
    productModal.style.display = 'none';
    arrow1.style.display = 'inline';
    arrowUp1.style.display = 'none';
});
arrowDown2.addEventListener('mouseover', () => {
    companyModal.style.display = 'block';
    arrow2.style.display = 'none';
    arrowUp2.style.display = 'inline';
});
arrowDown2.addEventListener('click', () => {
    companyModal.style.display = 'none';
    arrow2.style.display = 'inline';
    arrowUp2.style.display = 'none';
});
arrowDown3.addEventListener('mouseover', () => {
    contactModal.style.display = 'block';
    arrow3.style.display = 'none';
    arrowUp3.style.display = 'inline';
});
arrowDown3.addEventListener('click', () => {
    contactModal.style.display = 'none';
    arrow3.style.display = 'inline';
    arrowUp3.style.display = 'none';
});

const menuBar = document.querySelector('.menu-bar');
const closeBtn = document.querySelector('.closeBtn');
const modal = document.querySelector('.modal');

menuBar.addEventListener('click', () => {
    closeBtn.style.display = 'block';
    menuBar.style.display = 'none';
    modal.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        menuBar.style.display = 'block';
        closeBtn.style.display = 'none';
    }
});

const mobileArrowDown1 = document.querySelector('.mobile-arrow-down1');
const mobileArrowUp1 = document.querySelector('.mobile-arrow-up1');
const mobileArrowDown2 = document.querySelector('.mobile-arrow-down2');
const mobileArrowUp2 = document.querySelector('.mobile-arrow-up2');
const mobileArrowDown3 = document.querySelector('.mobile-arrow-down3');
const mobileArrowUp3 = document.querySelector('.mobile-arrow-up3');
const mobileProductModal = document.querySelector('.mobile-product-modal');
const mobileCompanyModal = document.querySelector('.mobile-company-modal');
const mobileContactModal = document.querySelector('.mobile-contact-modal');
const mobileArrow1 = document.querySelector('.mobile-arrow1');
const mobileArrow2 = document.querySelector('.mobile-arrow2');
const mobileArrow3 = document.querySelector('.mobile-arrow3');

// EVENT LISTENER FOR DOWN ARROW (MOBILE)
mobileArrowDown1.addEventListener('click', () => {
    mobileProductModal.style.display = 'block';
    mobileArrow1.style.display = 'none';
    mobileArrowUp1.style.display = 'inline';
});

mobileArrowDown2.addEventListener('click', () => {
    mobileCompanyModal.style.display = 'block';
    mobileArrow2.style.display = 'none';
    mobileArrowUp2.style.display = 'inline';
});
mobileArrowDown3.addEventListener('click', () => {
    mobileContactModal.style.display = 'block';
    mobileArrow3.style.display = 'none';
    mobileArrowUp3.style.display = 'inline';
});
// EVENT LISTENER FOR UP ARROW (MOBILE)
mobileArrowUp1.addEventListener('click', () => {
    mobileProductModal.style.display = 'none';
    mobileArrow1.style.display = 'inline';
    mobileArrowUp1.style.display = 'none';
});

mobileArrowUp2.addEventListener('click', () => {
    mobileCompanyModal.style.display = 'none';
    mobileArrow2.style.display = 'inline';
    mobileArrowUp2.style.display = 'none';
});
mobileArrowUp3.addEventListener('click', () => {
    mobileContactModal.style.display = 'none';
    mobileArrow3.style.display = 'inline';
    mobileArrowUp3.style.display = 'none';
});