
    const columns = [
      { name: "ID", uid: "id", sortable: true },
      { name: "Provider", uid: "provider", sortable: true },
      { name: "Name", uid: "name", sortable: true },
      { name: "Type", uid: "type", sortable: true },
      { name: "Main Domain", uid: "main_domain", sortable: true },
      { name: "Main IP", uid: "main_ip", sortable: true },
      { name: "Geo", uid: "geo", sortable: true },
      { name: "Is Proxy", uid: "is_proxy", sortable: true },
      { name: "Interval", uid: "interval", sortable: true },
      { name: "Days Left", uid: "days_left", sortable: true },
      { name: "Last Reinstall", uid: "last_reinstall", sortable: true },
      { name: "OS Installed", uid: "os_installed", sortable: true },
      { name: "Move Server", uid: "move_server", sortable: true },
      { name: "Project Name", uid: "project_name", sortable: true },
      { name: "Email", uid: "email", sortable: true },
      { name: "Status", uid: "status", sortable: true },
      { name: "Project Type", uid: "project_type", sortable: true },
      { name: "Actions", uid: "actions"},
    ];
    

  
  const statusOptions = [
    {name: "Active", uid: "active"},
    {name: "InActive", uid: "inactive"},
    {name: "Retumed", uid: "retumed"},
  ];
  
const tableName="Dashbord Table"

  
  const dataTable = [
    {
      id: 1,
      provider: "AWS",
      name: "EC2 Server 1",
      type: "VPS",
      main_domain: "example.com",
      main_ip: "192.168.1.1",
      geo: "USA",
      is_proxy: false,
      interval: "Monthly",
      days_left: 15,
      last_reinstall: "2023-09-12",
      os_installed: "Ubuntu 20.04",
      move_server: false,
      project_name: "Project Alpha",
      email_account: "admin@example.com",
      status: "active",
      project_type: "Web Hosting",
      
      actions: ""
    },
    {
      id: 2,
      provider: "DigitalOcean",
      name: "Droplet 1",
      type: "VPS",
      main_domain: "example.org",
      main_ip: "192.168.2.1",
      geo: "Canada",
      is_proxy: false,
      interval: "Annually",
      days_left: 30,
      last_reinstall: "2023-10-01",
      os_installed: "CentOS 8",
      move_server: true,
      project_name: "Project Beta",
      email_account: "support@example.org",
      status: "inactive",
      project_type: "Database Hosting",
      actions: ""
    },
    {
      id: 3,
      provider: "Google Cloud",
      name: "Compute Engine",
      type: "Dedicated",
      main_domain: "compute.example.com",
      main_ip: "192.168.3.1",
      geo: "Germany",
      is_proxy: true,
      interval: "Monthly",
      days_left: 5,
      last_reinstall: "2023-08-25",
      os_installed: "Debian 11",
      move_server: false,
      project_name: "Project Gamma",
      email_account: "admin@compute.example.com",
      status: "inactive",
      project_type: "Cloud Infrastructure",
      actions: ""
    },
   
  ];
  

  const INITIAL_VISIBLE_COLUMNS = [  
    "id",
      "provider",
      "name",
      "type",
      "main_domain",
      "main_ip",
      "geo",
      "is_proxy",
      "interval",
      "days_left",
      "last_reinstall",
      "os_installed",
      "move_server",
      "project_name",
      "email",
      "status",
      "project_type",
      
      "actions"];

  
  
  export {columns,dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS ,tableName};