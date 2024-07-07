// script.js

(function(username) {

    var userDiv = document.createElement('div');
    userDiv.classList.add('user-info'); 

    var usernameElement = document.createElement('span');
    usernameElement.textContent = username;

    var profilePic = document.createElement('img');
    profilePic.src = 'https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg';
    profilePic.alt = username + "'s profile picture";
    profilePic.classList.add('profile-pic'); 

    userDiv.appendChild(profilePic);
    userDiv.appendChild(usernameElement);

    var navbar = document.getElementById('navbar');
    navbar.appendChild(userDiv);
})('John');
