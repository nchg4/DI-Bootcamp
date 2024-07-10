document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('myForm');
    const jsonOutput = document.getElementById('jsonOutput');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstNameInput').value;
        const lastName = document.getElementById('lastNameInput').value;

        const formData = {
            firstName: firstName,
            lastName: lastName
        };

        const jsonString = JSON.stringify(formData, null, 2);

        jsonOutput.textContent = jsonString;
    });

});
