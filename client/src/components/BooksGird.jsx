import React from "react";

const BooksGrid = ({ selectedGenre }) => {
  // Pavyzdiniai knygų duomenys
  const books = [
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Detective",
      rating: 4.5,
      image:
        "https://img1.od-cdn.com/ImageType-400/2390-1/%7B1B06F42D-2233-4600-B207-7D298AA61772%7DIMG400.JPG",
    },
    {
      id: 2,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Love",
      rating: 4.8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5AfrvhPMMEL7WHYy-I3HS9VOWRhhiT4McQ&s",
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "History",
      rating: 4.7,
      image:
        "https://thumb.knygos-static.lt/lwR-YGTaLQz-rf0c-csYcHurP9Q=/fit-in/0x801/images/books/1166468/41mjx6yzfel--sx324-bo1-204-203-200-.jpg",
    },
    {
      id: 4,
      title: "Dune",
      author: "Frank Herbert",
      genre: "Science fiction",
      rating: 4.6,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantastic",
      rating: 4.9,
      image:
        "https://img1.od-cdn.com/ImageType-400/0293-1/%7BC9B54C84-0369-49C5-A0B3-98E3353A2129%7DIMG400.JPG",
    },
    {
      id: 6,
      title: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      genre: "Detective",
      rating: 4.8,
      image:
        "https://almabooks.com/wp-content/uploads/2016/10/adventures-of-Sherlock-Holmes.jpg",
    },
    {
      id: 7,
      title: "The Notebook",
      author: "Nicholas Sparks",
      genre: "Love",
      rating: 4.4,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483183484i/33648131.jpg",
    },
    {
      id: 8,
      title: "Harry Potter",
      author: "J.K. Rowling",
      genre: "Fantastic",
      rating: 4.9,
      image:
        "https://img1.od-cdn.com/ImageType-400/3450-1/%7B622708F6-78D7-453A-A7C5-3FE6853F3167%7DIMG400.JPG",
    },
  ];

  // Filtruojame knygas pagal pasirinktą žanrą
  const filteredBooks =
    selectedGenre === "All Books"
      ? books
      : books.filter((book) => book.genre === selectedGenre);

  return (
    <div className="px-6 pb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-[#2a2727] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-cyan-600 text-white text-xs px-2 py-1 rounded-full">
                {book.rating} ★
              </div>
            </div>

            <div className="p-3">
              <h3 className="font-bold text-white text-sm mb-1 truncate">
                {book.title}
              </h3>
              <p className="text-gray-400 text-xs mb-2">{book.author}</p>
              <span className="inline-block bg-cyan-900/30 text-cyan-400 text-xs px-2 py-1 rounded">
                {book.genre}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksGrid;
