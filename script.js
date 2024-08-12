/*
Modal variables; used to open, close, identify, and add effects to the modals
*/
const openButton = document.querySelectorAll("[data-modal-target]");
const closeButton = document.querySelectorAll("[data-close-target]");
const overlay = document.getElementById('Overlay');
const modalImage = document.getElementById('ModalImage');

/*
Modal button variables; used to add animations to the images
*/
const slider1 = document.querySelectorAll('.Slide1');
const slider2 = document.querySelectorAll('.Slide2');
const slider3 = document.querySelectorAll('.Slide3');
const slider4 = document.querySelectorAll('.Slide4');

/*
Colt and Jake introduction variables; used to add animations to elements
*/
const ids = document.querySelectorAll('.ToBeAnimated');
const idsText = document.querySelectorAll('.ToBeAnimatedDelayed');

/*
Info text variables; used to give an extra info animation to the modal buttons
*/
const SUVText = document.getElementById('SUVTextRaise');
const truckText = document.getElementById('TruckTextRaise');
const sedanText = document.getElementById('SedanTextRaise');
const coupeText = document.getElementById('CoupeTextRaise');

/*
Variable to make sure that the modal animations only run once
*/
var executed = false;

/*
Event listener added to the modal buttons, activates the modal
*/
openButton.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
});

/*
Event listener added to the already activated modal, used to deactivate it
*/
closeButton.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.Modal');
        closeModal(modal);
    })
});

/*
Event listener added for the use of the overlay, it is an accessibility function for easy modal navigation, give the 
user the ability to click anywhere outside the modal to close it
*/
overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".Modal.Active");
    modals.forEach(modal => {
        closeModal(modal);
    })
});

/*
Helper function for the open modal event listener
*/
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('Active');
    overlay.classList.add('Active');
    modalImage.classList.add('Deactivated');
}

/*
Helper function for the close modal event listener
*/
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('Active');
    overlay.classList.remove('Active');
    modalImage.classList.remove('Deactivated');
}

/*
This function makes the Instagram logo on the header a clickable link that take the user to the car detail website
*/
function newInstaTab() {
    window.open("https://www.instagram.com/okcelitedetailing/" , '_blank');
}

/*
This function makes the TikTok logo on the header a clickable link that take the user to the car detail website
*/
function newTiktokTab() {
    window.open("https://www.tiktok.com/@okcelitedetailing/", '_blank');
}

/*
This function makes the Twitter logo on the header a clickable link that take the user to the car detail website
*/
function newTwitterTab() {
    window.open("https://x.com/okcElitedetails/", '_blank');
}

/*
This is the start of the scroll animations
*/
document.addEventListener('DOMContentLoaded', function() {

/*
Using the window height and position of the user on the page it activates certain blocks of code
*/
function checkPosition() {
    const windowHeight = window.innerHeight;
    /*
    This code adds certain css classes to the listed elements that allows them to complete the sliding and appearing animation
    */
    ids.forEach(id => {
        const positionFromTop = id.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            id.classList.add('ScrollObject');
            id.classList.remove('Invisible');
        }
    });
    /*
    This code adds certain css classes to the listed elements that allows them to complete the sliding and appearing animation
    */
    idsText.forEach(idText => {
        const positionFromTopDelayed = idText.getBoundingClientRect().top;

        if (positionFromTopDelayed - windowHeight <= 0) {
            idText.classList.add('ScrollObjectDelay');
            idText.classList.remove('Invisible');
        }
    });
    /*
    This code is for the SUV modal image and allows it to complete the sliding and appearing animation, additionally it
    gives it the hover animation where it grows and developes a shadow
    */
    slider1.forEach(slid1 => {
        if (executed) { return; }
        const positionFromTopSlid1 = slid1.getBoundingClientRect().top;

        if (positionFromTopSlid1 - windowHeight <= 0) {
            slid1.classList.add('ScrollObject');
            slid1.classList.remove('Invisible');
            setTimeout(() => {
                slid1.classList.remove('ScrollObject');
                slid1.classList.add('Grow');
                slid1.addEventListener('mouseover', () => { 
                    slid1.classList.add('Hover');
                    SUVText.classList.add('Raise');
                    SUVText.classList.remove('Invisible');
                });
                slid1.addEventListener('mouseout', () => { 
                    slid1.classList.remove('Hover');
                    SUVText.classList.remove('Raise');
                });
                executed = true;
            }, 2000);
        }
    });
    /*
    This code is for the Truck modal image and allows it to complete the delayed sliding and appearing animation, additionally it
    gives it the hover animation where it grows and developes a shadow
    */
    slider2.forEach(slid2 => {
        if (executed) { return; }
        const positionFromTopSlid2 = slid2.getBoundingClientRect().top;

        if (positionFromTopSlid2 - windowHeight <= 0) {
            slid2.classList.add('ScrollObjectDelay');
            slid2.classList.remove('Invisible');
            setTimeout(() => {
                slid2.classList.remove('ScrollObjectDelay');
                slid2.classList.add('Grow');
                slid2.addEventListener('mouseover', () => { 
                    slid2.classList.add('Hover');
                    truckText.classList.add('Raise');
                    truckText.classList.remove('Invisible');
                });
                slid2.addEventListener('mouseout', () => { 
                    slid2.classList.remove('Hover');
                    truckText.classList.remove('Raise');
                });
                executed = true;
            }, 2000);
        }
    });
    /*
    This code is for the Sedan modal image and allows it to complete the delayed sliding and appearing animation, additionally it
    gives it the hover animation where it grows and developes a shadow
    */
    slider3.forEach(slid3 => {
        if (executed) { return; }
        const positionFromTopSlid3 = slid3.getBoundingClientRect().top;

        if (positionFromTopSlid3 - windowHeight <= 0) {
            slid3.classList.add('ScrollObjectDelay2');
            slid3.classList.remove('Invisible');
            setTimeout(() => {
                slid3.classList.remove('ScrollObjectDelay2');
                slid3.classList.add('Grow');
                slid3.addEventListener('mouseover', () => { 
                    slid3.classList.add('Hover');
                    sedanText.classList.add('Raise');
                    sedanText.classList.remove('Invisible');
                });
                slid3.addEventListener('mouseout', () => { 
                    slid3.classList.remove('Hover');
                    sedanText.classList.remove('Raise');
                });
                executed = true;
            }, 2000);
        }
    });
    /*
    This code is for the Coupe modal image and allows it to complete the delayed sliding and appearing animation, additionally it
    gives it the hover animation where it grows and developes a shadow
    */
    slider4.forEach(slid4 => {
        if (executed) { return; }
        const positionFromTopSlid4 = slid4.getBoundingClientRect().top;

        if (positionFromTopSlid4 - windowHeight <= 0) {
            slid4.classList.add('ScrollObjectDelay3');
            slid4.classList.remove('Invisible');
            setTimeout(() => {
                slid4.classList.remove('ScrollObjectDelay3');
                slid4.classList.add('Grow');
                slid4.addEventListener('mouseover', () => { 
                    slid4.classList.add('Hover');
                    coupeText.classList.add('Raise');
                    coupeText.classList.remove('Invisible');
                });
                slid4.addEventListener('mouseout', () => { 
                    slid4.classList.remove('Hover');
                    coupeText.classList.remove('Raise');
                });
                executed = true;
            }, 2000);
        }
    });
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);
checkPosition();
});
