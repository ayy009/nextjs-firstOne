const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "API USER", uid: "api_user", sortable: true },
  { name: "PROVIDER", uid: "provider", sortable: true },
  { name: "ACCOUNT EMAIL", uid: "account_email", sortable: true },
  { name: "ACCOUNT PASSWORD", uid: "account_password", sortable: true },
  { name: "PROJECT", uid: "project", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTION", uid: "actions", sortable: false },
];


  
  
  const statusOptions = [
    {name: "Active", uid: "active"},
    {name: "InActive", uid: "inactive"},
    {name: "Retuned", uid: "retuned"},
  ];

  const tableName = "Domains Provider Table"
  
  

  

  const INITIAL_VISIBLE_COLUMNS = [
    "id",             // ID
    "name",           // NAME
    "api_user",       // API USER
    "provider",       // PROVIDER
    "account_email",  // ACCOUNT EMAIL
    "account_password", // ACCOUNT PASSWORD
    "project",        // PROJECT
    "status",         // STATUS
    "actions",         // ACTION
  ];
  
  
  
  export {columns, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName};