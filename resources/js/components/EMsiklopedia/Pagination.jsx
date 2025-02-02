import React from "react";
import { motion } from "framer-motion";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-lg transition-all duration-200 
                        ${
                            currentPage === 1
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                >
                    ←
                </motion.button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                        <motion.button
                            key={page}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onPageChange(page)}
                            className={`w-10 h-10 rounded-lg transition-all duration-200
                            ${
                                currentPage === page
                                    ? "bg-primary-orange text-white shadow-lg"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </motion.button>
                    )
                )}

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                        onPageChange(Math.min(currentPage + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-lg transition-all duration-200 
                        ${
                            currentPage === totalPages
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                >
                    →
                </motion.button>
            </div>
        </div>
    );
};

export default Pagination;
