/**xp7 */
const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

const ul = navBar.querySelector('ul');

const logoutLi = document.createElement('li');

const logoutText = document.createTextNode('Logout');
logoutLi.appendChild(logoutText);

ul.appendChild(logoutLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log('First link text:', firstLi.textContent);
console.log('Last link text:', lastLi.textContent);