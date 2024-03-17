import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      {pageNumbers.map(number => (
        <button key={number} onClick={() => onPageChange(number)} className={currentPage === number ? "bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded mr-2" : "bg-white hover:bg-gray-200 px-4 py-2 rounded mr-2"}>{number}</button>
      ))}
    </div>
  );
};

export default Pagination;
