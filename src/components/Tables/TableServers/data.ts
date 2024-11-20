  
    const statusOptions = [
      {name: "Active", uid: "active"},
      {name: "InActive", uid: "inactive"},
      {name: "Retumed", uid: "retumed"},
    ];
  
  
    const statusOptions2 = [
      {name: "Active", uid: "flase"},
      {name: "InActive", uid: "true"},
    ];
    const tableName = "Servers Table"
    


    // const columns = [
    //     { name: "ID", uid: "id", sortable: true },
    //     { name: "Provider", uid: "provider", sortable: true },
    //     { name: "Main IP", uid: "mainIp", sortable: true },
    //     { name: "Server Name", uid: "serverName", sortable: true },
    //     { name: "OS Installed", uid: "os_installed", sortable: true },
    //     { name: "Provider Email Account", uid: "providerEmail", sortable: true },
    //     { name: "Server Created At", uid: "serverCreatedAt", sortable: true },
    //     { name: "Type", uid: "type", sortable: true },
    //     { name: "Project", uid: "project", sortable: true },
    //     { name: "Created By", uid: "createdBy", sortable: true },
    //     { name: "Logs", uid: "log", sortable: true },
    //     { name: "Server Status", uid: "serverStatus", sortable: true },
    //     { name: "Project Name", uid: "projectName", sortable: true },
    //     { name: "Actions", uid: "actions", sortable: true },
    //   ];
      
    const columns = [
      { name: "ID", uid: "id", sortable: true },
      { name: "Provider", uid: "serverprovider_id", sortable: true },
      { name: "Main IP", uid: "main_ip", sortable: true },
      { name: "Server Name", uid: "server_name", sortable: true },
      { name: "OS Installed", uid: "os_installed", sortable: true },
      { name: "Provider Email Account", uid: "email_account", sortable: true },
      { name: "Server Created At", uid: "created_at", sortable: true },
      { name: "Type", uid: "type", sortable: true },
      { name: "Project", uid: "project_type", sortable: true },
      { name: "Created By", uid: "name", sortable: true },
      { name: "Logs", uid: "log", sortable: true },
      { name: "Server Status", uid: "status", sortable: true },
      { name: "Project Name", uid: "project_name", sortable: true },
      { name: "Actions", uid: "actions", sortable: true },
    ];
      const dataTable = [
        {
          id: 76,
          provider: "PV1",
          mainIp: "80.96.157.63",
          serverName: "EMT_S21266",
          os_installed: "centos8",
          providerEmail: "admin95@e-impact.com",
          serverCreatedAt: "2024-11-01",
          type: "vps",
          project: "global",
          createdBy: "User-1",
          logs: "Test Failed: Cannot connect to 80.96.157.63:22. Error 110. Connection timed out",
          serverStatus: "active",
          projectName: "Test Project",
          actions: "",
        },
        // Additional rows as needed
      ];
      
      const INITIAL_VISIBLE_COLUMNS = [
        "id",
        "serverprovider_id",
        "main_ip",
        "server_name",
        "os_installed",
        "email_account",
        "created_at",
        "type",
        "project_type",
        "name",
        "log",
        "status",
        "project_name",
        "actions",
      ];
      

      
    
    
    export {columns, dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName};