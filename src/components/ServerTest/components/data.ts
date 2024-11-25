const columns = [
  { name: "Server", uid: "server_name", sortable: true },
  { name: "Interface", uid: "interface_ip", sortable: true },
  { name: "Return Path", uid: "return_path", sortable: true },
  { name: "Receiver Email", uid: "receiver", sortable: true },
  { name: "Interface Tag", uid: "interface_tag", sortable: true },
  { name: "Test Status", uid: "smtp_status", sortable: true },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Inactive", uid: "inactive" },
  { name: "Returned", uid: "returned" },
];



const INITIAL_VISIBLE_COLUMNS = [
  "server_name",
  "interface_ip",
  "return_path",
  "receiver",
  "interface_tag",
  "smtp_status",
];

const tableName = "Servers Table";

export { columns, statusOptions, INITIAL_VISIBLE_COLUMNS, tableName };
