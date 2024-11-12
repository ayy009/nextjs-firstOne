import React from 'react'

function Loading() {
  return (
    
    <div className="w-full p-6 space-y-8">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white  dark:bg-gray-700 rounded-lg p-4 shadow animate-pulse">
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-3" />
            <div className="flex justify-between items-center">
              <div className="h-8 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
            </div>
            <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 animate-pulse">
            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
            <div className="flex justify-between items-center">
              <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        {/* Search and Filters */}
        <div className="p-4 border-b flex flex-wrap gap-4 items-center justify-between">
          <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="flex gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                {[...Array(8)].map((_, i) => (
                  <th key={i} className="p-4">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:bg-gray-800">
              {[...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(8)].map((_, colIndex) => (
                    <td key={colIndex} className="p-4">
                      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t flex items-center justify-between">
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>

  )
}

export default Loading