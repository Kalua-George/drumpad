window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    if (key) {
        key.classList.add('played');
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; // Only remove when the transform transition ends
        this.classList.remove('played');
    }

    // Loop over all the keys and remove the 'played' class after the transition ends
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});

window.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (key) {
        key.classList.remove('played');
    }
});
















/*
window.addEventListener('keydown', function (e) {
const audio = document.querySelector(`audio[data-key="${e.code}"]`)
const key = document.querySelector(`.key[data-key="${e.code}"]`)

 if(!audio) return;

 audio.currentTime = 0 ;
 audio.play();

 key.classList.add('.played');

 function removeTransition(e) {
    if (e.propertyName !== 'transform') return; 
    this.classList.remove('played');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
})

window.addEventListener('keyup', function (e){
const key = document.querySelector(`.key[data-key="${e.code}"]`)

key.classList.remove('.played')
} )*/