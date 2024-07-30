const openButton = document.querySelectorAll("[data-modal-target]");
const closeButton = document.querySelectorAll("[data-close-target]");
const overlay = document.getElementById('Overlay');

openButton.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
});

closeButton.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.Modal');
        closeModal(modal);
    })
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".Modal.Active");
    modals.forEach(modal => {
        closeModal(modal);
    })
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('Active');
    overlay.classList.add('Active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('Active');
    overlay.classList.remove('Active');
}

document.addEventListener('DOMContentLoaded', function() {
const elements = document.querySelectorAll('.ToBeAnimated');
const delayedElements = document.querySelectorAll('.ToBeAnimatedDelayed');
const slider1 = document.querySelectorAll('.Slide1');
const slider2 = document.querySelectorAll('.Slide2');
const slider3 = document.querySelectorAll('.Slide3');
const slider4 = document.querySelectorAll('.Slide4');
const SUVText = document.getElementById('SUVTextRaise');
const truckText = document.getElementById('TruckTextRaise');
const sedanText = document.getElementById('SedanTextRaise');
const coupeText = document.getElementById('CoupeTextRaise');
var executed = false;

function checkPosition() {
    const windowHeight = window.innerHeight;
    elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('ScrollObject');
            element.classList.remove('Invisible');
        }
    });
    delayedElements.forEach(delayedElement => {
        const positionFromTopDelayed = delayedElement.getBoundingClientRect().top;

        if (positionFromTopDelayed - windowHeight <= 0) {
            delayedElement.classList.add('ScrollObjectDelay');
            delayedElement.classList.remove('Invisible');
        }
    });
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
