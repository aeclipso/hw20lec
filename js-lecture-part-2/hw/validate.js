function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (login === "beeline" || login === "beeinterns" || login === "bee"){
        alert("логин занят");
        return;
    }else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if(!firstName){
        alert('Введите имя')
    } else if (!license) {
        alert('Необходимо согласие');
    } else if (gender === "male") {
        alert("Уважаемый " + firstName + ", заявка создана");
        // else (gender === "female")
    } else {
        alert("Уважаемая " + firstName + ", заявка создана");
    }
}
