const cartBtn = document.querySelector('.add-to-cart-btn');
cartBtn.addEventListener('click', function()
{
    this.classList.toggle('added');
    if (this.classList.contains('added'))
    {
        this.textContent = 'In Cart';
    } else {
        this.textContent = 'Add To Cart';
    }
});

const reviewQuestions = document.querySelectorAll('.question');
reviewQuestions.forEach(questionBlock => {
    const like = questionBlock.querySelector('.like-btn');
    const dislike = questionBlock.querySelector('.dislike-btn');

    like.addEventListener('click', () => {
        like.classList.toggle('active-like');
        dislike.classList.remove('active-dislike');
    });

    dislike.addEventListener('click', () => {
        dislike.classList.toggle('active-dislike');
        like.classList.remove('active-like');
    });
});

const scrollToTopBtn = document.querySelector('.arrow-up-icon2');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});