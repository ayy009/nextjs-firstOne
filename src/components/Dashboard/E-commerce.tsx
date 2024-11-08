"use client";
import React, { useState, useEffect } from "react";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import TableDashboard from "../Tables/TableDashboard";
import GetAllData from "@/actions/DashboardActions";

const ECommerce: React.FC = () => {
  const [dataTableDashboard, setDataTableDashboard] = useState({
    dataTwo: {
      nbrActiveServers: 0,
      nbrInactiveServers: 0,
      nbrReturnedServers: 0,
    },
    servers: [],
    projects: [],
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetAllData();
        setDataTableDashboard({
          dataTwo: {
            nbrActiveServers: result.nbrActiveServers,
            nbrInactiveServers: result.nbrInactiveServers,
            nbrReturnedServers: result.nbrReturnedServers,
          },
          servers: result.servers,
          projects :result.projects,
        });
     console.log(dataTableDashboard)
      } catch (error) {
        setError("Error fetching data");
      }
    };
    fetchData();
  }, []);



  return (
    <>
      {/* Display error message if there was an issue fetching data */}
      {error && <div className="text-red-500">{error}</div>}

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          {/* Display DataStatsOne */}
          <DataStatsOne data={dataTableDashboard.projects} />

          {/* Display TableDashboard */}
          <TableDashboard data={dataTableDashboard} />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
