const CORRECT_CARD = {
    number: "1111 1111 1111 1111",
    name: "NAME SURNAME",
    expiry: "11/11",
    cvv: "111"
};

const paymentWindow = document.getElementById('payment-window');
const openBtn = document.getElementById('payment-open-button');
const closeBtn = document.getElementById('payment-close-button');
const blurredBg = document.querySelector('.blurred-background');
const placeOrderBtn = document.getElementById('place-order');
const agreementCheckbox = document.getElementById('agreement-checkbox');

openBtn.addEventListener('click', () => {
    paymentWindow.classList.add('active');
    paymentWindow.classList.remove('success'); 
    document.body.style.overflow = 'hidden';
});

const closePayment = () => {
    paymentWindow.classList.remove('active');
};
closeBtn.addEventListener('click', closePayment);
blurredBg.addEventListener('click', closePayment);


const paymentOptions = document.querySelectorAll('.payment-option');

paymentOptions.forEach(option => {
    const header = option.querySelector('.method-header');
    const checkbox = option.querySelector('.method-check');
    header.addEventListener('click', () => {
        const isCurrentlyActive = option.classList.contains('active');
        paymentOptions.forEach(opt => {
            opt.classList.remove('active');
            opt.querySelector('.method-check').checked = false;
        });

        if (!isCurrentlyActive)
        {
            option.classList.add('active');
            checkbox.checked = true;
        }
        checkFormReadiness(); 
    });
});

document.addEventListener('input', (e) => {
    const target = e.target;
    if (target.classList.contains('card-number-input'))
    {
        let val = target.value.replace(/\D/g, '');
        let formatted = val.match(/.{1,4}/g);
        target.value = formatted ? formatted.join(' ') : '';
    }

    if (target.classList.contains('expiration-input'))
        {
        let val = target.value.replace(/\D/g, '');
        if (val.length > 2)
        {
            target.value = val.substring(0, 2) + '/' + val.substring(2, 4);
        } else {
            target.value = val;
        }
    }

    if (target.classList.contains('cvv-input'))
    {
        target.value = target.value.replace(/\D/g, '');
    }

    checkFormReadiness();
    
    const parent = target.closest('.input-field');
    if (parent) parent.classList.remove('invalid');
});

document.addEventListener('keydown', (e) => {
    if (e.target.classList.contains('expiration-input'))
        {
        if (e.key === 'Backspace' && e.target.value.length === 3)
        {
            e.target.value = e.target.value.substring(0, 1);
        }
    }
});

function checkFormReadiness()
{
    const activeOption = document.querySelector('.payment-option.active');
    if (!activeOption)
        {
        placeOrderBtn.classList.remove('ready');
        return;
    }

    const num = activeOption.querySelector('.card-number-input').value;
    const nameInput = activeOption.querySelector('.card-name-input');
    const name = nameInput ? nameInput.value.trim() : "";
    const exp = activeOption.querySelector('.expiration-input').value;
    const cvv = activeOption.querySelector('.cvv-input').value;
    const isFilled = num.length === 19 && exp.length === 5 && cvv.length === 3 && name.length > 2;
    const isAgreed = agreementCheckbox.checked;

    if (isFilled && isAgreed)
    {
        placeOrderBtn.classList.add('ready');
    } else {
        placeOrderBtn.classList.remove('ready');
    }
}

placeOrderBtn.addEventListener('click', () =>
    {
    if (!placeOrderBtn.classList.contains('ready')) return;

    const activeOption = document.querySelector('.payment-option.active');
    const cardNum = activeOption.querySelector('.card-number-input');
    const cardName = activeOption.querySelector('.card-name-input');
    const cardExp = activeOption.querySelector('.expiration-input');
    const cardCvv = activeOption.querySelector('.cvv-input');

    let hasErrors = false;
    const validate = (input, isCorrect) => {
        const parent = input.closest('.input-field');
        if (!isCorrect)
        {
            parent.classList.add('invalid');
            hasErrors = true;
        } else {
            parent.classList.remove('invalid');
        }
    };

    validate(cardNum, cardNum.value === CORRECT_CARD.number);
    validate(cardName, cardName.value.trim() === CORRECT_CARD.name);
    validate(cardExp, cardExp.value === CORRECT_CARD.expiry);
    validate(cardCvv, cardCvv.value === CORRECT_CARD.cvv);

    if (!hasErrors)
    {
        paymentWindow.classList.add('success');
        setTimeout(() => {
            if (paymentWindow.classList.contains('active'))
            {
                closePayment();
            }
        }, 5000); 
    }
});

agreementCheckbox.addEventListener('change', checkFormReadiness);

const scrollToTopBtn = document.querySelector('.arrow-up-icon2');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});