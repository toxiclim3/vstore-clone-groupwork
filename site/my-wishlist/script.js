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