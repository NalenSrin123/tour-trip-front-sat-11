import React from 'react'

const ReviewRow = ({ label, value }) => {
   return (
        <div className="flex justify-between gap-4 py-2 border-b border-gray-50 last:border-0">
          <span className="text-[13px] text-gray-500 font-body">{label}</span>
          <span className="text-[13px] text-gray-900 font-medium font-body text-right">{value || "—"}</span>
        </div>
      )
}

export default ReviewRow
