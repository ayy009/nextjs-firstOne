const columns = [
    { name: "ticketId", uid: "id", sortable: true },
    { name: "Username", uid: "username", sortable: true },
    { name: "Title", uid: "title", sortable: true },
    { name: "Type", uid: "type", sortable: true },
    { name: "Associated", uid: "associated", sortable: true },
    { name: "Server IP", uid: "serverIp", sortable: true },
    { name: "Provider", uid: "provider", sortable: true },
    { name: "Images", uid: "images", sortable: true },
    { name: "Date", uid: "date", sortable: true },
    { name: "Status", uid: "status", sortable: true },
    { name: "Actions", uid: "actions", sortable: false },
];

const dataTable = [
    {
        id: 2817,
        username: "Boutayna Metarfi",
        title: "Server Down",
        type: "server",
        associated: "EMT_S47814",
        serverIp: "92.53.86.243",
        provider: "PV160",
        images: null, // Or you can add an image path if available
        date: "2024-11-06 13:59:24",
        status: "wait-answer",
        actions: "message-icon", // This can represent the icon or a reference to the icon
    },
    {
        id: 2816,
        username: "Boutayna Metarfi",
        title: "Server Down",
        type: "server",
        associated: "EMT_S47815",
        serverIp: "92.53.86.250",
        provider: "PV160",
        images: null,
        date: "2024-11-06 13:58:56",
        status: "wait-answer",
        actions: "message-icon",
    },
    {
        id: 2814,
        username: "Boutayna Metarfi",
        title: "Server Down",
        type: "server",
        associated: "EMT_S36610",
        serverIp: "104.219.233.203",
        provider: "PV452",
        images: null,
        date: "2024-11-05 21:00:22",
        status: "wait-answer",
        actions: "message-icon",
    },
    {
        id: 2813,
        username: "Fatima Zahrae Hatef",
        title: "Server Down",
        type: "server",
        associated: "EMT_S45648",
        serverIp: "179.61.169.67",
        provider: "PV488",
        images: null,
        date: "2024-11-05 17:36:32",
        status: "wait-answer",
        actions: "message-icon",
    },
    {
        id: 2802,
        username: "Boutayna Metarfi",
        title: "Server Down",
        type: "server",
        associated: "EMT_S46254",
        serverIp: "193.57.33.107",
        provider: "PV452",
        images: null,
        date: "2024-11-03 23:31:04",
        status: "wait-answer",
        actions: "message-icon",
    },
    {
        id: 2618,
        username: "Zineb Aroussi",
        title: "Server Down",
        type: "server",
        associated: "EMT_S46314",
        serverIp: "80.97.47.95",
        provider: "PV18",
        images: null,
        date: "2024-10-29 11:33:02",
        status: "wait-answer",
        actions: "message-icon",
    },
];

const statusOptions = [
    { name: "Wait Answer", uid: "wait-answer" },
    { name: "Answered", uid: "answered" },
    { name: "Closed", uid: "closed" },
];

const INITIAL_VISIBLE_COLUMNS = [
    "id",       // id
    "username",       // Username
    "title",          // Title
    "type",           // Type
    "associated",     // Associated
    "serverIp",       // Server IP
    "provider",       // Provider
    "images",         // Images
    "date",           // Date
    "status",         // Status
    "actions",        // Actions
];

const tableName = "TableTickets"

export { columns, dataTable, statusOptions, INITIAL_VISIBLE_COLUMNS, tableName };
