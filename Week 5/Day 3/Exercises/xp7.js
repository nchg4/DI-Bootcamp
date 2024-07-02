// Array of books
const allBooks = [
    {
        title: "Night",
        author: "Ellie Wiessel",
        image: "https://m.media-amazon.com/images/I/71i0ob9eo5L._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: true
    },
    {
        title: "Little Women",
        author: "Louisa May Alcott",
        image: "https://m.media-amazon.com/images/I/714j9RdFgbL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: false
    }
];

function renderBooks() {
    const listBooksSection = document.querySelector('.listBooks');

    allBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        const image = document.createElement('img');
        const details = document.createElement('div');

        // Set image source and width
        image.src = book.image;
        image.width = 100;

        // Set details text
        details.textContent = `${book.title} written by ${book.author}`;

        if (book.alreadyRead) {
            bookDiv.classList.add('book', 'read');
        } else {
            bookDiv.classList.add('book');
        }

        bookDiv.appendChild(image);
        bookDiv.appendChild(details);

        listBooksSection.appendChild(bookDiv);
    });
}

renderBooks();
