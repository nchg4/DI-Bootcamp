document.addEventListener('DOMContentLoaded', function() {
    // retrive  form from html file
    const form = document.getElementById('userForm');
  
    // consolelog the form 
    console.log('Form:', form);
  
    // get inputs by their id and consulelog them
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    console.log('First Name Input:', firstNameInput);
    console.log('Last Name Input:', lastNameInput);
  
    // get inputs by their name attribute and log them
    const inputsByName = document.getElementsByName('firstname');
    console.log('Inputs by Name:', inputsByName);
  
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      // Get input values
      const firstNameValue = firstNameInput.value.trim();
      const lastNameValue = lastNameInput.value.trim();
  
      // Check if inputs are not empty
      if (firstNameValue === '' || lastNameValue === '') {
        alert('Please fill out all fields.');
        return;
      }
  
      // Create  bulletpoints li/ul
      const ul = document.querySelector('.usersAnswer');
      ul.innerHTML = ''; 
  
      const firstNameLi = document.createElement('li');
      firstNameLi.textContent = firstNameValue;
      ul.appendChild(firstNameLi);
  
      const lastNameLi = document.createElement('li');
      lastNameLi.textContent = lastNameValue;
      ul.appendChild(lastNameLi);
  
      // Clean the form inputs after submission
      firstNameInput.value = '';
      lastNameInput.value = '';
    });
  });
  