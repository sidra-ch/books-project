import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const Hero = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPage = 6;

  const paginatedBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage,
    itemsPerPage
  );
  useEffect(() => {
    fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            searchQuery
          )}&maxResults=35&key=AIzaSyAQ9CMQu1USCE3AnqrJEuQAn1DPEHwHkBY`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        const mappedBooks = data.item?.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title || "Untitled",
        }));
      } catch (error) {}
    };
  });

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-gradient-to-b from-gray-900 to-gray-800 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {paginatedBooks.map((book, index) => {
            if (book.dummy) {
              retur(
                <div
                  key={book.id || index}
                  className="group relative bg-gray-800/30 rounded-xl md:rounded-2xl backdrop-blur-xl border border-dashed border-gray-700/50 flex items-center justify-center h-64 md:h-96"
                >
                  <p className="text-gray-400 text-sm md:text-base">No Book</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
