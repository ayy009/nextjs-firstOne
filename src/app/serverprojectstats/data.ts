  
    const statusOptions = [
      {name: "Active", uid: "active"},
      {name: "InActive", uid: "inactive"},
      {name: "Retumed", uid: "retumed"},
    ];
  
  
    const statusOptions2 = [
      {name: "Active", uid: "flase"},
      {name: "InActive", uid: "true"},
    ];
    const tableName = "Servers Project Stats"
    



      
    const columns = [
      { name: "ID", uid: "id", sortable: true },
      { name: "Project", uid: "project1", sortable: true },
      { name: "Project / Entity", uid: "entity", sortable: true },
      { name: "Users", uid: "users1", sortable: true },
      { name: "Servers", uid: "entity_count", sortable: true },
      { name: "Cost/Mailler", uid: "percentage11", sortable: true },
    ];

      
      const INITIAL_VISIBLE_COLUMNS = [
        "entity",
        "entity_count",
        "users1",
        "percentage11",

      ];
      

      
    
    
    export {columns, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName};