

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Inactive", uid: "inactive" },
  { name: "Returned", uid: "returned" },
];

const tableName = "Domains Table";

const dataTable = [
  {
    id: 33810,
    name: "EMT_S39192", // Update from `deliveryServer` to `name`
    provider: "EMT", // Assuming this is the provider, update as needed
    expire_at: "2024-12-31", // Replace with the actual expiration date
    daysleft: 10, // This should be calculated based on the current date and expire_at
    status: "active", // Keep the status as is
    actions: "Edit", // Example action, adjust as per your requirement
  },
  // ... (rest of the data table)
];


const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "Name", uid: "name", sortable: true },
  { name: "Provider", uid: "provider_name", sortable: true },
  { name: "Expire At", uid: "expire_at", sortable: true },
  { name: "Days Left", uid: "daysleft", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Actions", uid: "actions", sortable: true },
];

const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "name",
  "provider_name",
  "expire_at",
  "daysleft",
  "status",
  "actions",
];

export { columns, dataTable, statusOptions, INITIAL_VISIBLE_COLUMNS, tableName };
