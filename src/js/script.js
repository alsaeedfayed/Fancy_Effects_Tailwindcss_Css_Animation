const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const wrapperRect = wrapper.getBoundingClientRect();
const noRect = no.getBoundingClientRect();
const wimg = document.querySelector('.wimg');
yes.addEventListener('click' , () => {;
    question.innerHTML = 'love you too :) ';
    wimg.style.boxShadow = '0 0 10px #f67, 0 0 20px #f67, 0 0 40px #f67, 0 0 80px #f67,0 0 160px #f67'
})

no.addEventListener('mouseover' , () => {
    const i = Math.floor(Math.random() * (wrapperRect.width -noRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noRect.height)) + 1;
    no.style.left = i + 'px';
    no.style.top = j + 'px';
    no.style.color = 'red'
})