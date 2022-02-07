function calculate() {
    let userMoney = document.getElementById('userMoney').value;
    let userAge = document.getElementById('userAge').value;
    let text = document.getElementById('text');
    let discountText = document.getElementById('discountText')
    let image = document.getElementById('image');

    if (userMoney === undefined || userAge === undefined || userMoney === "" || userAge === "") {
        text.innerText = '';
        discountText.innerHTML = '';
        image.src = "";
        return;
    }

    if (userAge < 1) {
        text.innerText = 'Возраст введен неверно!'
        image.src = "";
    } else if (userAge >= 1 && userAge < 20) {
        discountText.innerHTML = ' Вам полагается скидка в 5%.'
        if (userMoney >= 300 * 0.95 && userMoney <= 3000 * 0.95) {
            text.innerText = 'Вы можете купить чайник.';
            image.src = "images/teapot.jpg";
        } else if (userMoney >= 3001 * 0.95 && userMoney <= 10000 * 0.95) {
            text.innerText = 'Вы можете купить пылесос.';
            image.src = "images/cleaner.jpg";
        } else if (userMoney > 10000 * 0.95) {
            text.innerText = 'Вы можете купить холодильник.';
            image.src = "images/fridge.jpg";
        } else {
            text.innerText = 'У вас недостаточно средств.';
            image.src = "";
        }
    } else if (userAge >= 20 && userAge <= 65) {
        discountText.innerHTML = ''
        if (userMoney >= 300 && userMoney <= 3000) {
            text.innerText = 'Вы можете купить чайник.';
            image.src = "images/teapot.jpg";
        } else if (userMoney >= 3001 && userMoney <= 10000) {
            text.innerText = 'Вы можете купить пылесос.';
            image.src = "images/cleaner.jpg";
        } else if (userMoney > 10000) {
            text.innerText = 'Вы можете купить холодильник.';
            image.src = "images/fridge.jpg";
        } else {
            text.innerText = 'У вас недостаточно средств.';
            image.src = "";
        }
    } else {
        discountText.innerHTML = ' Вам полагается скидка в 10%.'
        if (userMoney >= 300 * 0.9 && userMoney <= 3000 * 0.9) {
            text.innerText = 'Вы можете купить чайник.';
            image.src = "images/teapot.jpg";
        } else if (userMoney >= 3001 * 0.9 && userMoney <= 10000 * 0.9) {
            text.innerText = 'Вы можете купить пылесос.';
            image.src = "images/cleaner.jpg";
        } else if (userMoney > 10000 * 0.9) {
            text.innerText = 'Вы можете купить холодильник.';
            image.src = "images/fridge.jpg";
        } else {
            text.innerText = 'У вас недостаточно средств.';
            image.src = "";
        }
    }
}