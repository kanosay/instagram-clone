
let logo = document.querySelector('.header__logo-white');
let darkMode = document.getElementById('switch');
let mode = document.querySelector('.dark');
let heart = document.querySelector('.fa-heart');
let like = document.querySelector('.fa-heart');
let comment = document.querySelector('.fa-message');
let dm = document.querySelector('.fa-paper-plane');
let numOfLikes = document.querySelector('.likes');
let form = document.querySelector('.form');
let submit = document.querySelector('.submit');
let text = document.querySelector('.text');
let characterComment = document.querySelector('.character__comments')

let isLiked = false; 

darkMode.addEventListener('click', function () {
    if (mode.classList.toggle('mode')) {
        mode.src = 'img/dark-ligh/light.png';
        mode.style.borderColor = 'white';
        document.body.style.backgroundColor = '#1E1E1E';
        document.body.style.color = '#F0F0F0';
        logo.src = 'img/logo/oldagram-logo-white.svg';
        heart.style.color = '#F0F0F0';
        comment.style.color = '#F0F0F0';
        dm.style.color = '#F0F0F0';
    } else {
        mode.src = 'img/dark-ligh/dark.png';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.src = 'img/logo/oldagram-logo.svg';
        mode.style.borderColor = 'black';
        heart.style.color = 'black';
        comment.style.color = 'black';
        dm.style.color = 'black';
    }

    if (isLiked) {
        like.classList.add('like');
        numOfLikes.innerHTML = '21,341 likes';
    } else {
        like.classList.remove('like');
        numOfLikes.innerHTML = '21,340 likes';
    }
});

like.addEventListener('click', function() {
    isLiked = !isLiked; 

    if (isLiked) {
        like.classList.add('like');
        numOfLikes.innerHTML = '21,341 likes';
    } else {
        like.classList.remove('like');
        numOfLikes.innerHTML = '21,340 likes';
    }
});

comment.addEventListener('click', function() {
    form.classList.toggle('form__active');
});

submit.addEventListener('click', function(){
    if(text.value) {
        characterComment.innerHTML += `
            <li>
                <span>me</span> ${text.value}
            </li>
        `
    } else {
        return null;
    }
})


