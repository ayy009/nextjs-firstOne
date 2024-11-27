export default function EmailInterfaceSkeleton() {
    return (
      <div className="min-h-screen bg-gray-50 p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Email Headers Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
            
            <div className="space-y-4">
              {/* Header Fields */}
              {['MIME version', 'Content Type', 'Date', 'To', 'From', 'Subject', 'List-Unsubscribe'].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
                  <div className="h-9 bg-gray-100 rounded-md w-full" />
                </div>
              ))}
              
              {/* Return Path */}
              <div className="space-y-2 mt-6">
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-9 bg-gray-100 rounded-md w-full" />
              </div>
              
              {/* Test emails */}
              <div className="space-y-2">
                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-24 bg-gray-100 rounded-md w-full" />
              </div>
              
              {/* Sending Type Dropdown */}
              <div className="space-y-2">
                <div className="h-9 bg-gray-100 rounded-md w-full" />
              </div>
              
              {/* Test Button */}
              <div className="h-10 bg-indigo-100 rounded-md w-full" />
            </div>
          </div>
  
          {/* Delivery Servers Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
  
            {/* Toolbar */}
            <div className="flex justify-end gap-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-9 w-24 bg-gray-100 rounded-md" />
                <div className="h-9 w-24 bg-gray-100 rounded-md" />
                <div className="h-9 w-24 bg-gray-100 rounded-md" />
                <div className="h-9 w-9 bg-gray-100 rounded-md" />
              </div>
            </div>
  
            {/* Available/Selected Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Available Items */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-9 px-3 rounded-md bg-gray-50 border border-gray-200"
                    placeholder="Search available items"
                  />
                </div>
                <div className="space-y-2">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="h-8 bg-gray-100 rounded animate-pulse" />
                  ))}
                </div>
              </div>
  
              {/* Selected Items */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-9 px-3 rounded-md bg-gray-50 border border-gray-200"
                    placeholder="Search selected items"
                  />
                </div>
                <div className="space-y-2">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="h-8 bg-gray-100 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Code Editor Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-48 bg-gray-100 rounded-md w-full" />
        </div>
  
        {/* Test Results Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-24 bg-gray-100 rounded-md w-full" />
        </div>
      </div>
    )
  }
  
  