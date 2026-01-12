const paymentWindow = document.getElementById('payment-window');
const openBtn = document.getElementById('payment-open-button');
const closeBtn = document.getElementById('payment-close-button');

openBtn.addEventListener('click', function()
{
    paymentWindow.classList.add('active');
});

closeBtn.addEventListener('click', function()
{
    paymentWindow.classList.remove('active');
});

const blurredBg = document.querySelector('.blurred-background');
blurredBg.addEventListener('click', function()
{
    paymentWindow.classList.remove('active');
});