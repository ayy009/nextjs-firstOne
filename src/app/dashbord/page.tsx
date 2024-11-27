import axios from 'axios';
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import DataStatsTwo from "@/components/DataStats/DataStatsTwo";
import TableBase from "@/components/Tables/TableBase";
import { columns, INITIAL_VISIBLE_COLUMNS, statusOptions, tableName } from "@/components/Dashboard/data";
import { getUserApiKey } from '@/lib/ApiKey';
import { redirect } from 'next/navigation';

interface Props {
  searchParams: {
    [key: string]: string | string[];
  };
}

const Dashboard = async ({ searchParams }: Props) => {
  const userApiKey = await getUserApiKey();

  // Construct the status query if applicable
  const statusQuery = searchParams?.status ? `?status=${searchParams.status}` : '';
  
  const ApiUrl2 = `http://manageservers.lwebl3ami9.store/api/Servers?api_key=${userApiKey}${statusQuery}`;
  
  // Initialize data with default values
  let data = {
    projects: [],
    servers: [],
    nbrActiveServers: 0,
    nbrInactiveServers: 0,
    nbrReturnedServers: 0,
  };

  try {
    // Make the API call
    const result = await axios.post(ApiUrl2);
    // if(result.data.success== false) {return NextResponse.redirect(new URL("/auth"));}

    if (result.data.success === false) {
      // Server-side redirect for unauthorized access
      redirect('/auth');
    }
    
    // Extract data
    data = result.data;

    console.log("Fetched and processed data:", data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      if (error.response?.status === 403 || error.response?.status === 401) {
        console.error("Access denied (403): Invalid API key or insufficient permissions.");
        redirect('/auth');
        
      } else {
        console.error("Axios error:", error.response?.data || error.message);
      }
    } else {
      // Handle unexpected errors
      console.error("An unexpected error occurred:", error);
    }

    console.log("Using fallback data due to error.");
  }

  // Prepare processed data for stats
  const dataTwo = {    
    nbrActiveServers: data.nbrActiveServers,
    nbrInactiveServers: data.nbrInactiveServers,
    nbrReturnedServers: data.nbrReturnedServers,
  };

  return (
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
      <div className="col-span-12 xl:col-span-12">
        {data.projects.length > 0 ? (
          <DataStatsOne data={data.projects} />
        ) : (
          <p>No project data available.</p>
        )}

        <div className="flex flex-col gap-4 rounded-sm mt-5 bg-white px-6 py-2 text-dark dark:bg-gray-dark dark:text-white">
          <h2 className="p-3 text-xl font-extrabold underline dark:text-white">{tableName}</h2>
          
          <DataStatsTwo data={dataTwo} />
          
          {data.servers.length > 0 ? (
            <TableBase
              columns={columns}
              dataTable={data.servers}
              statusOptions={statusOptions}
              INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
              tableName={tableName}
            />
          ) : (
            <p>No server data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
