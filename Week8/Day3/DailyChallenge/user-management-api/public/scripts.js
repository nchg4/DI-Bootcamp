function enableRegisterSubmit() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    document.getElementById('submit').disabled = !name || !lastName || !email || !username || !password;
}

function enableLoginSubmit() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    document.getElementById('submit').disabled = !username || !password;
}