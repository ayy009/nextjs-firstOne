
import axios from 'axios'
import DataStatsOne from "@/components/DataStats/DataStatsOne"
import DataStatsTwo from "@/components/DataStats/DataStatsTwo"
import TableBase from "@/components/Tables/TableBase"
import { columns, INITIAL_VISIBLE_COLUMNS, statusOptions, tableName } from "./data"
import { getUserApiKey } from '@/lib/ApiKey'

interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export async function Dashboard({ searchParams }: Props) {

  const userApiKey = await getUserApiKey(); 

  const statusQuery = searchParams?.status ? `?status=${searchParams.status}` : ''


  const ApiUrl1 = `http://manageservers.lwebl3ami9.store/api/Servers?api_key=${userApiKey}${statusQuery}`
  const ApiUrl2 = `http://manageservers.lwebl3ami9.store/api/Servers?api_key=${userApiKey}`
  console.log(ApiUrl1)


  const { data } = await axios.post(ApiUrl1)
  
  const dataTwo = {    
    nbrActiveServers: data.nbrActiveServers,
    nbrInactiveServers: data.nbrInactiveServers,
    nbrReturnedServers: data.nbrReturnedServers,
  }

  return (
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
      <div className="col-span-12 xl:col-span-12">
        <DataStatsOne data={data.projects} />

        <div className="flex flex-col gap-4 rounded-sm mt-5 bg-white px-6 py-2 text-dark dark:bg-gray-dark dark:text-white">
          <h2 className="p-3 text-xl font-extrabold underline dark:text-white">{tableName}</h2>
          <DataStatsTwo data={dataTwo} />
          <TableBase
            columns={columns}
            dataTable={data.servers}
            statusOptions={statusOptions}
            INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
            tableName={tableName}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard