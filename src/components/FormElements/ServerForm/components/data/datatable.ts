const columns = [
    { name: "Public IP", uid: "public_ip", sortable: true },
    { name: "Private IP", uid: "private_ip", sortable: true },
    { name: "PTR (RDNS)", uid: "ptr_rdns", sortable: true },
    { name: "IP Version", uid: "ip_version", sortable: true },
    { name: "VMTA Tag Number", uid: "vmta_tag_number", sortable: true },
    { name: "Domain Associated", uid: "domain_associated", sortable: true },
    { name: "Actions", uid: "actions" }
  ];
  
  const dataTable = [
    {
        id: 1, 
      public_ip: "203.0.113.1",
      private_ip: "10.0.0.1",
      ptr_rdns: "example.com",
      ip_version: "IPv4",
      vmta_tag_number: "VMTA-001",
      domain_associated: "example.com",
      actions: ""
    },
    {
        id: 2, 
      public_ip: "203.0.113.2",
      private_ip: "10.0.0.2",
      ptr_rdns: "test.com",
      ip_version: "IPv4",
      vmta_tag_number: "VMTA-002",
      domain_associated: "test.com",
      actions: ""
    },
    {
        id: 3, 
      public_ip: "203.0.113.3",
      private_ip: "10.0.0.3",
      ptr_rdns: "sample.com",
      ip_version: "IPv6",
      vmta_tag_number: "VMTA-003",
      domain_associated: "sample.com",
      actions: ""
    }
  ];
  
  const INITIAL_VISIBLE_COLUMNS = [
    "public_ip",
    "private_ip",
    "ptr_rdns",
    "ip_version",
    "vmta_tag_number",
    "domain_associated",
    "actions"
  ];
  const tableName=""

  const statusOptions = [
    {name: "Active", uid: "active"},
    {name: "InActive", uid: "inactive"},
    {name: "Retumed", uid: "retumed"},
  ];

  

export {columns,dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS ,tableName};


