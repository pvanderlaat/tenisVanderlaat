const navSlider = () => {
    const burger = document.getElementsByClassName('burger')[0];
    const nav = document.getElementsByClassName('links')[0];

    burger.addEventListener('click' , () => {
        nav.classList.toggle('active');
    })
}

navSlider();