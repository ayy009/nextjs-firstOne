"use client";

import { Accordion, AccordionItem, Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { ChevronDown, MousePointerClick, NotebookText, ServerCog, ServerCrash } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { GetServersInterfaces } from "@/actions/ServersActions/SendTestActions";
import toast from "react-hot-toast";
import { AutoSelectModal } from "./components/AutoSelectModal";
import DeliveryBase from "./components/DeliveryBase";

interface Server {
  id: number;
  label: string;
}

interface ServerItem {
  id: number;
  label: string;
}

export default function SideTwo({ dataGetServers,setRightItemsInterfaces,rightItemsInterfaces }: any) {
  const [ipVersion, setIpVersion] = useState("ipv4");
  const [loadOption, setLoadOption] = useState(""); 
  const [controlSetServerSelect, setControlSetServerSelect] = useState<Server[]>([]);
  const [serverInterface, setServerInterface] = useState<ServerItem[]>([]);
  const isFirstRender = useRef(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoSelectModalOpen, setIsAutoSelectModalOpen] = useState(false);

  const [leftItemsServers, setLeftItemsServers] = React.useState(dataGetServers);
  const [rightItemsServers, setRightItemsServers] = React.useState<ServerItem[]>([]);

  const [leftItemsInterfaces, setLeftItemsInterfaces] = React.useState<ServerItem[]>([]);
  // const [rightItemsInterfaces, setRightItemsInterfaces] = React.useState<ServerItem[]>([]);
  React.useEffect(() => {
    setLeftItemsServers(dataGetServers);
  }, [dataGetServers]);

  React.useEffect(() => {
    setLeftItemsInterfaces(serverInterface);
  }, [serverInterface]);


  React.useEffect(() => {
    setLoadOption("")
  }, [ipVersion,controlSetServerSelect]);

  React.useEffect(() => {
    setLeftItemsServers((prevLeftItems:any) =>
      prevLeftItems.filter(
        (leftItem:any) => !rightItemsServers.some((rightItem) => rightItem.id === leftItem.id)
      )
    );
  }, [rightItemsServers]);
  



  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const getServerInterfaces = async () => {
      setRightItemsInterfaces([])
      if (controlSetServerSelect.length <= 0) {
        toast.error("Select Servers", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#F44336",
            color: "white",
          },
        });
        return;
      }
      if (loadOption && controlSetServerSelect.length) {
        const arrayIndexServerSelected = controlSetServerSelect.map(
          (item: Server) => item.id
        );
        const queryParams = {
          ip_version: ipVersion,
          interface_type: loadOption,
          servers_id: arrayIndexServerSelected,
        };
        try {
          const result = await GetServersInterfaces({ queryParams });

          if (result.success === true) {
            const formatDataResult = result.interfaces.map((item: any) => ({
              id: item.id,
              label: `[${item.server_name}]-${item.ip}-${item.type}-${item.domain}`,
            }));
            setServerInterface(formatDataResult);

            toast.success("Getting Servers Interfaces successfully", {
              duration: 4000,
              position: "top-right",
              style: {
                background: "#4CAF50",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "#4CAF50",
              },
            });
          } else {
            toast.error("Failed Getting Servers Interfaces", {
              duration: 4000,
              position: "top-right",
              style: {
                background: "#F44336",
                color: "white",
              },
            });
          }
        } catch (error) {
          console.error("Error fetching server interfaces:", error);
          toast.error("Error fetching server interfaces", {
            duration: 4000,
            position: "top-right",
            style: {
              background: "#F44336",
              color: "white",
            },
          });
        }
      }
    };
    getServerInterfaces();
  }, [loadOption]);

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 dark:hover:bg-slate-950 rounded-sm h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const handleLoadOptionChange = (event: any) => {
    setLoadOption(event.target.value);
  };

  const handleAutoSelectClick = () => {
    setIsAutoSelectModalOpen(true);
  };

  return (
    <>
    <Accordion
      fullWidth={true}
      defaultSelectedKeys={["1"]}
      selectionMode="multiple"
      showDivider={false}
      className="mt-5 flex w-full flex-col p-2 dark:bg-gray-dark md:mt-0 md:w-[68%]"
      variant="shadow"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        className="dark:bg-gray-dark flex flex-col justify-center"
        startContent={<ServerCog className="text-primary" />}
        title="Delivery Servers"
      >
          <ButtonGroup className="w-full">
        <Button
          className="dark:bg-slate-950 dark:hover:bg-slate-800"
          endContent={!isMobile && <MousePointerClick />}
          onClick={handleAutoSelectClick}
        >
          Auto Select
        </Button>

        {/* Load Select */}
        <Dropdown>
          <DropdownTrigger>
            <Button 
              endContent={<ChevronDown />}
              className="dark:bg-slate-950 dark:hover:bg-slate-800 bg-zinc-300 text-dark dark:text-white px-4 h-10"
            >
              {loadOption ? loadOption.charAt(0).toUpperCase() + loadOption.slice(1) : "Load"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Load Option Selection"
            onAction={(key) => handleLoadOptionChange({ target: { value: key } })}
          >
            <DropdownItem key="all">All</DropdownItem>
            <DropdownItem key="original">Original</DropdownItem>
            <DropdownItem key="smtp">Smtp</DropdownItem>
            <DropdownItem key="vmta">Vmta</DropdownItem>
            <DropdownItem key="route">Route</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* IP Version Select */}
        <Dropdown>
          <DropdownTrigger>
            <Button 
              endContent={<ChevronDown />}
              className="dark:bg-slate-950 dark:hover:bg-slate-800"
            >
              {ipVersion === "ipv4" ? "IPv4" : ipVersion === "ipv6" ? "IPv6" : "All"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="IP Version Selection"
            onAction={(key) => setIpVersion(key.toString())}
          >
            <DropdownItem key="ipv4">IPv4</DropdownItem>
            <DropdownItem key="ipv6">IPv6</DropdownItem>
            <DropdownItem key="all">All</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Button
          className="dark:bg-slate-950 dark:hover:bg-slate-800"
          endContent={!isMobile && <NotebookText />}
        >
          PMTAQueue
        </Button>
      </ButtonGroup>
            <div className="place-items-center">
              <DeliveryBase 
                data={dataGetServers} 
                SetControlSetServerSelect={setControlSetServerSelect} 
                setRightItems={setRightItemsServers} 
                rightItems={rightItemsServers} 
                setLeftItems={setLeftItemsServers} 
                leftItems={leftItemsServers}
              />
            </div>
      </AccordionItem>

      <AccordionItem
        key="2"
        className="dark:bg-gray-dark"
        startContent={<ServerCrash className="text-primary" />}
        title="Delivery Servers Interfaces"
      >
         <DeliveryBase 
            data={serverInterface} 
            setRightItems={setRightItemsInterfaces} 
            rightItems={rightItemsInterfaces} 
            setLeftItems={setLeftItemsInterfaces} 
            leftItems={leftItemsInterfaces}
         />
      </AccordionItem>
    </Accordion>

    <AutoSelectModal 
        setRightItemsInterfaces={setRightItemsInterfaces}
        setRightItemsServers={setRightItemsServers}
        isOpen={isAutoSelectModalOpen} 
        onClose={() => setIsAutoSelectModalOpen(false)} 
    />
    </>
  );
}