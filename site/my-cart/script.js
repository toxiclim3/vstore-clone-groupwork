document.getElementById('closeBtn').addEventListener('click', () =>
{
    const wrapper = document.getElementById('wrapper');
    const animationDuration = 350;

    wrapper.classList.add('slideToDown_closing_animation');

    setTimeout(() =>
    {
        wrapper.style.display = 'none';
        wrapper.classList.remove('slideToDown_closing_animation');
    }, animationDuration);
});