import DefaultLayout from '@/components/Layouts/DefaultLaout'
import TableServers from '@/components/Tables/TableServers'
import React from 'react'

function page() {
  return (
    <div>
           <DefaultLayout>

<div >
<TableServers/>

</div>

    


</DefaultLayout>
    </div>
  )
}

export default page