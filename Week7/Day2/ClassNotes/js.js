const userData = {
    name: '',
    username: '',
    email: ''
};

document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    userData.name = document.getElementById('name').value;
    userData.username = document.getElementById('username').value;
    userData.email = document.getElementById('email').value;

    try {
        const response = await fetch('https://users-18kl.onrender.com/userjson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await response.json();
        document.getElementById('response').innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('response').innerText = 'Error: ' + error.message;
    }
});
