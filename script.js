
document.addEventListener('DOMContentLoaded', function() {
const elements = document.querySelectorAll('.ToBeAnimated');
const delayedElements = document.querySelectorAll('.ToBeAnimatedDelayed')

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
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);
checkPosition();
});
 