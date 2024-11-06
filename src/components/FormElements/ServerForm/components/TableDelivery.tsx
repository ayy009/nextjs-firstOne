"use client"
import TableBase from '@/components/Tables/TableBase'
import { columns, dataTable, INITIAL_VISIBLE_COLUMNS, statusOptions, tableName } from './data/datatable'
import { Button, ButtonGroup } from '@nextui-org/react'
import { CloudDownload, Cog, CopyX, Plus, Trash2, Undo } from 'lucide-react'
import IsMobileSelect from './IsMobileSelect'
import { useEffect, useState } from 'react'


function TableDelivery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define a function to update the mobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust 768px as needed for mobile
    };

    // Set initial state
    handleResize();

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=''>


        {/* ------------------------------------------start------------------------------------------isMobile OR Not */}

        {isMobile 
        ? 
        <IsMobileSelect/>
        :
        <div className='flex flex-col md:flex-row justify-end  pr-10'>
        <ButtonGroup className=''
        
        >
      <Button 
      // {isMobile && isIconOnly}
      size='sm' 
      onClick={e=>console.log(isMobile)}
      className='dark:bg-gray-800 py-5  text-gray-600 dark:text-gray-300'
      endContent={<CloudDownload />}
      >Get Server IPs</Button>
      
      <Button 
      size='sm' 
      className='dark:bg-gray-800 py-5  text-gray-600 dark:text-gray-300'
      endContent={<Plus/>}
      >Add Interfaces</Button>
      <Button 
      size='sm' className='dark:bg-gray-800 py-5  text-gray-600 dark:text-gray-300'
      
      endContent={<Cog/>}
      >Get PTR</Button>

<Button 
      size='sm' className='dark:bg-gray-800 py-5  text-gray-600 dark:text-gray-300'
      endContent={<Undo/>}
      >PTR</Button>

<Button 
      size='sm' className='dark:bg-gray-800 py-5  text-gray-600 dark:text-gray-300'
      endContent={<CopyX/>}
      >Selected</Button>

<Button 
      size='sm' className='dark:bg-gray-800 py-5 text-gray-600 dark:text-gray-300'
      endContent={<Trash2/>}
      >All</Button>


      {/* _______________________________________________________________________________________end */}
    </ButtonGroup>
        </div>}
        {/* -------------------------------------------end-----------------------------------------isMobile OR Not  */}


    <TableBase columns={columns}  dataTable={dataTable} statusOptions={statusOptions}  INITIAL_VISIBLE_COLUMNS ={INITIAL_VISIBLE_COLUMNS} tableName={tableName}/>
    </div>
  )
}

export default TableDelivery