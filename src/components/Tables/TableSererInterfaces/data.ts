const columns = [
  { name: "Id", uid: "id", sortable: true },
  { name: "Delivery server", uid: "deliveryServer", sortable: true },
  { name: "Ip", uid: "ip", sortable: true },
  { name: "Domain", uid: "domain", sortable: true },
  { name: "Ptr", uid: "ptr", sortable: true },
  { name: "Vmta", uid: "vmta", sortable: true },
  { name: "Tag", uid: "tag", sortable: true },
  { name: "Ip version", uid: "ip_version", sortable: true },
  { name: "Type", uid: "type", sortable: true },
  { name: "Server status", uid: "status_server", sortable: true },
  { name: "Status", uid: "status", sortable: true },
];

  
  
  const statusOptions = [
    {name: "Active", uid: "active"},
    {name: "InActive", uid: "inactive"},
    {name: "Retuned", uid: "retuned"},
  ];


  const statusOptions2 = [
    {name: "Active", uid: "flase"},
    {name: "InActive", uid: "true"},
  ];
  const tableName = "Servers Table"
  
  
  const dataTable =  [
    {
      id: 33810, deliveryServer: "EMT_S39192", ip: "80.96.157.155", domain: "qugciplyfl.net", ptr: "false", vmta: "qugciplyfl.net",
      tag: "pmta-80.96.157.155", ipVersion: "IPv4", type: "original", serverStatus: "active", status: "active"
    },
    {
      id: 33808, deliveryServer: "EMT_S39191", ip: "80.96.157.153", domain: "avfiqwayzt.uk", ptr: "true", vmta: "avfiqwayzt.uk",
      tag: "pmta-80.96.157.153", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "inactive"
    },
    {
      id: 33087, deliveryServer: "EMT_S38798", ip: "31.184.249.7", domain: "krvkfmj.website", ptr: "true", vmta: "krvkfmj.website",
      tag: "pmta-31.184.249.7", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "active"
    },
    {
      id: 19418, deliveryServer: "EMT_SF31918", ip: "81.181.104.68", domain: "apcptxmb.yvfreugxvr.ca", ptr: "false", vmta: "apcptxmb.yvfreugxvr.ca",
      tag: "pmta-81.181.104.68", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "active"
    },
    {
      id: 19416, deliveryServer: "EMT_SF31917", ip: "81.181.104.67", domain: "xhxndysf.rlicm.ai", ptr: "true", vmta: "xhxndysf.rlicm.ai",
      tag: "pmta-81.181.104.67", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "inactive"
    },
    {
      id: 19308, deliveryServer: "EMT_SF31812", ip: "5.183.102.141", domain: "hduzeoxzwpowgwugm.shop", ptr: "false", vmta: "pmztefubs.icu",
      tag: "pmta-5.183.102.141", ipVersion: "IPv4", type: "original", serverStatus: "retuned", status: "active"
    },
    {
      id: 67689, deliveryServer: "C_SF56198", ip: "2605:e440:1::3:25a", domain: "lowe.emmerich.com", ptr: "true", vmta: "lowe.emmerich.com",
      tag: "pmta-2605_e440_1__3_25a", ipVersion: "IPv6", type: "original", serverStatus: "active", status: "active"
    },
    {
      id: 67688, deliveryServer: "C_SF56197", ip: "2605:e440:2::2:36c", domain: "boyle.predovic.info", ptr: "true", vmta: "boyle.predovic.info",
      tag: "pmta-2605_e440_2__2_36c", ipVersion: "IPv6", type: "original", serverStatus: "active", status: "active"
    },
    {
      id: 67686, deliveryServer: "C_SF56196", ip: "2605:e440:4::338", domain: "king.lockman.org", ptr: "true", vmta: "king.lockman.org",
      tag: "pmta-2605_e440_4__338", ipVersion: "IPv6", type: "original", serverStatus: "active", status: "active"
    },
    {
      id: 67683, deliveryServer: "C_SF56195", ip: "2605:e440:4::1a5", domain: "koch.legros.com", ptr: "true", vmta: "koch.legros.com",
      tag: "pmta-2605_e440_4__1a5", ipVersion: "IPv6", type: "original", serverStatus: "active", status: "active"
    },
    {
      id: 33811, deliveryServer: "EMT_S39193", ip: "80.96.157.156", domain: "zvexipfy.com", ptr: "true", vmta: "zvexipfy.com",
      tag: "pmta-80.96.157.156", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "active"
    },
    {
      id: 33812, deliveryServer: "EMT_S39194", ip: "80.96.157.157", domain: "yxqolkay.org", ptr: "true", vmta: "yxqolkay.org",
      tag: "pmta-80.96.157.157", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "active"
    },
    {
      id: 33088, deliveryServer: "EMT_S38799", ip: "31.184.249.8", domain: "lmprxd.website", ptr: "true", vmta: "lmprxd.website",
      tag: "pmta-31.184.249.8", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "active"
    },
    {
      id: 19419, deliveryServer: "EMT_SF31919", ip: "81.181.104.69", domain: "fnveruxcxz.yvfreugxvr.ca", ptr: "true", vmta: "fnveruxcxz.yvfreugxvr.ca",
      tag: "pmta-81.181.104.69", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "active"
    },
    {
      id: 19417, deliveryServer: "EMT_SF31918", ip: "81.181.104.68", domain: "ipffdsl.rlicm.ai", ptr: "true", vmta: "ipffdsl.rlicm.ai",
      tag: "pmta-81.181.104.68", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "active"
    },
    {
      id: 19309, deliveryServer: "EMT_SF31813", ip: "5.183.102.142", domain: "dklwkfnmzix.website", ptr: "true", vmta: "fnveoxwdu.icu",
      tag: "pmta-5.183.102.142", ipVersion: "IPv4", type: "original", serverStatus: "inactive", status: "active"
    },
    {
      id: 67690, deliveryServer: "C_SF56199", ip: "2605:e440:1::3:25b", domain: "dole.emmerich.com", ptr: "true", vmta: "dole.emmerich.com",
      tag: "pmta-2605_e440_1__3_25b", ipVersion: "IPv6", type: "original", serverStatus: "active", status: "active"
    },
    {
      id: 67691, deliveryServer: "C_SF56200", ip: "2605:e440:2::2:36d", domain: "daryl.predovic.info", ptr: "true", vmta: "daryl.predovic.info",
      tag: "pmta-2605_e440_2__2_36d", ipVersion: "IPv6", type: "original", serverStatus: "active", status: "active"
    },
    {
      id: 67692, deliveryServer: "C_SF56201", ip: "2605:e440:4::339", domain: "mack.lockman.org", ptr: "true", vmta: "mack.lockman.org",
      tag: "pmta-2605_e440_4__339", ipVersion: "IPv6", type: "original", serverStatus: "active", status: "active"
    },
    {
      id: 67693, deliveryServer: "C_SF56202", ip: "2605:e440:4::1a6", domain: "kane.legros.com", ptr: "true", vmta: "kane.legros.com",
      tag: "pmta-2605_e440_4__1a6", ipVersion: "IPv6", type: "original", serverStatus: "active", status: "active"
    }
  ];

  const INITIAL_VISIBLE_COLUMNS = [
    "id",              // ID
    "deliveryServer",  // DELIVERY SERVER
    "ip",              // IP
    "domain",          // DOMAIN
    "ptr",             // PTR
    "vmta",            // VMTA
    "tag",             // TAG
    "ip_version",       // IP VERSION
    "type",            // TYPE
    "status_server",    // SERVER STATUS
    "status",          // STATUS
    
  ];
  
  
  export {columns, dataTable, statusOptions,INITIAL_VISIBLE_COLUMNS,tableName};