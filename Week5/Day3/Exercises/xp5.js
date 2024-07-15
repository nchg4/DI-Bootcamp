document.addEventListener('DOMContentLoaded', function() {
    const containerDiv = document.getElementById('container');
    console.log(containerDiv);

    const peteLi = document.querySelector('ul.list:nth-child(1) li:nth-child(2)');
    peteLi.textContent = 'Richard';

    const secondUl = document.querySelector('ul.list:nth-child(2)');
    const secondLi = secondUl.querySelector('li:nth-child(2)');
    secondUl.removeChild(secondLi);

    const allLists = document.querySelectorAll('.list');
    allLists.forEach((list) => {
        const firstLi = list.querySelector('li:first-child');
        firstLi.textContent = 'Noam'; 
    });

    allLists.forEach((list) => {
        list.classList.add('student_list');
    });

    const firstUl = document.querySelector('ul.list:first-of-type');
    firstUl.classList.add('university', 'attendance');

    containerDiv.style.backgroundColor = 'lightblue';
    containerDiv.style.padding = '10px';

    const danLi = firstUl.querySelector('li:last-child');
    danLi.style.display = 'none';

    peteLi.style.border = '1px solid black';

    document.body.style.fontSize = '22px';
});
