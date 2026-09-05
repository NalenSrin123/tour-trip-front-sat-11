import React from 'react'
import { cx } from '../../utils/helpers'

const Chip = ({ active, onClick, children }) => {
  return (
          <button
            type="button"
            onClick={onClick}
            className={cx(
              "px-3.5 py-2 rounded-lg text-[13px] font-medium font-body border transition-all duration-150",
              active
                ? "bg-teal-700 border-teal-700 text-white shadow-sm"
                : "bg-white border-gray-200 text-gray-600 hover:border-teal-300 hover:text-teal-700"
            )}
          >
            {children}
          </button>
        )
}

export default Chip
