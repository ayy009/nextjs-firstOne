import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDownIcon } from "lucide-react";
import path from "path";

export default function ActionsDropDown() {
  
  const items = [
    
      {
          key: "install_proxy",
          label: "Install Proxy",
      },

      {
          key: "auto_select",
          label: "Auto Select",
      },
      {
          key: "update_select",
          label: "Update Selected",
      },
      {
          key: "keep_servers",
          label: "Keep Servers",
      },
      {
          key: "update_status",
          label: "Update Status",
      },
  ];
  
  

  return (
    <div >

    <Dropdown>
      
      <DropdownTrigger className="w-full">
        <Button 
          variant="flat"
           className=""
          endContent={<ChevronDownIcon />}
        >
          actions
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}