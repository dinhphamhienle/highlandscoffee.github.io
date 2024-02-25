const span = document.querySelector('.popup-login');
const form = document.querySelector('.popup');
const exitBtn = document.querySelector('.x');
const userNameEl = document.getElementById('username');
const userLastnameEl = document.getElementById('userlastname');
const userEmailEl = document.getElementById('useremail');
const btnLogin = document.querySelector('.btn');

const handleShowPopup = () => {
    form.style.display = 'flex';
}

const handleHidePopup = () => {
    form.style.display = 'none';
}

const handleSubmit = () => {
    const userName = userNameEl.value;
    const userLastname = userLastnameEl.value;
    const userEmail = userEmailEl.value;

    if (userName === '') {
        alert('Vui lòng nhập tên');
    }

    else if (userLastname === '') {
        alert('Vui lòng nhập họ');
    }

    else if (userEmail === '') {
        alert('Vui lòng nhập email');
    }

    else {
        alert('Đăng kí thành công');
        console.log(`Your name: ${userName}`);
        console.log(`Your lastname: ${userLastname}`);
        console.log(`Your email: ${userEmail}`);
    }
}

span.addEventListener('click', handleShowPopup);
exitBtn.addEventListener('click', handleHidePopup);
btnLogin.addEventListener('click', handleSubmit);