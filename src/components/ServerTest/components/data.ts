const columns = [
  { name: "Server", uid: "server", sortable: true },
  { name: "Interface", uid: "interface", sortable: true },
  { name: "Return Path", uid: "returnPath", sortable: true },
  { name: "Receiver Email", uid: "receiverEmail", sortable: true },
  { name: "Interface Tag", uid: "interfaceTag", sortable: true },
  { name: "Test Status", uid: "testStatus", sortable: true },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Inactive", uid: "inactive" },
  { name: "Returned", uid: "returned" },
];

const dataTable = [
  {
    id: 33810,
    server: "Server_1",
    interface: "Interface_A",
    returnPath: "Return Path 1",
    receiverEmail: "email1@example.com",
    interfaceTag: "Tag_1",
    testStatus: "Active",
  },
  {
    id: 338114,
    server: "Server_2",
    interface: "Interface_B",
    returnPath: "Return Path 2",
    receiverEmail: "email2@example.com",
    interfaceTag: "Tag_2",
    testStatus: "Inactive",
  },
  // Add more rows as needed.
];

const INITIAL_VISIBLE_COLUMNS = [
  "server",
  "interface",
  "returnPath",
  "receiverEmail",
  "interfaceTag",
  "testStatus",
];

const tableName = "Servers Table";

export { columns, dataTable, statusOptions, INITIAL_VISIBLE_COLUMNS, tableName };
