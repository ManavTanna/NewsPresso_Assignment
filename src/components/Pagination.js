import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center my-4">
      <a
      href="#_"
      onClick={handlePreviousPage}
      className={`relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group ${currentPage === 1 ? 'pointer-events-none' : ''}`}
      style={{ maxWidth: 'fit-content' }}
      disabled={currentPage === 1}
    >
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Previous</span>
      </a>
    <span className="px-4 py-2 text-white">{`Page ${currentPage} of ${totalPages}`}</span><a
      href="#_"
      onClick={handleNextPage}
      className={`relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group ${currentPage === totalPages ? 'pointer-events-none' : ''}`}
      style={{ maxWidth: 'fit-content' }}
      disabled={currentPage === totalPages}
    >
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Next</span>
      </a>
    </div>
  );
};

export default Pagination;
