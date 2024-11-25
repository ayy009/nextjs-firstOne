import React, { useState } from "react";
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  Button, 
  Textarea, 
  Select, 
  SelectItem, 
  Tabs, 
  Tab 
} from "@nextui-org/react";
import { AutoSelectServers } from "@/actions/ServersActions/SendTestActions";
import toast from "react-hot-toast";

interface AutoSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  setRightItemsInterfaces:any,
  setRightItemsServers:any
}

const types = [
    { label: "All Types", value: "all" },
    { label: "original", value: "Original" },
    { label: "smtp", value: "Smtp" },
    { label: "vmta", value: "Vmta" },
    { label: "route", value: "Route" },

  ];

  const ipVersions = [
    { label: "IPv4", value: "ipv4" },
    { label: "IPv6", value: "ipv6" },
    { label: "All", value: "all" },
  ];

export function AutoSelectModal({ isOpen, onClose,setRightItemsInterfaces,setRightItemsServers }: AutoSelectModalProps) {
  const [selectedTab, setSelectedTab] = useState("interfaces");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedIpVersion, setSelectedIpVersion] = useState("ipv4");

  // Form data state
  const [formData, setFormData] = useState({
    inputValue: "",
    type: "all",
    ipVersion: "ipv4",
  });

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async () => {
    // console.log("Form Data Submitted:", formData);
    const dataForamat = {
        auto_select_type:`auto_select_${selectedTab}`,
        auto_select_interface_type:formData.type,
        auto_select_interface_version:formData.ipVersion,
        elements:formData.inputValue
    }
    const result =  await AutoSelectServers(dataForamat)
    if(result.success ==true){
      //---------------------------------------------------------------------------format data
      const formatDataInterfaces = result.interfaces.map((item: any) => ({
        id: item.id,
        label: `[${item.server_name}]-${item.ip}-${item.type}-${item.domain}`,
      }));

      const formatDataServers = result.servers.map((item: any) => ({
        id: item.id, // Keep the original id
        label: `${item.name}-[PV${item.serverprovider_id}]`, // Combine name and serverprovider_id into label
      }));


      //---------------------------------------------------------------------------end format data

      setRightItemsServers(formatDataServers)
      setRightItemsInterfaces(formatDataInterfaces)

      toast.success('Servers successfully deleted', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#4CAF50',
          color: 'white',
        },
        iconTheme: {
          primary: 'white',
          secondary: '#4CAF50',
        },
      });
    }else(
      toast.error('Failed to delete servers', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#F44336',
          color: 'white',
        },
      })
    )
    console.log(result)
    // console.log(dataForamat)
    onClose(); // Close modal after submission
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="4xl"
      className="max:h-1/2 dark:bg-gray-dark"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-row justify-evenly">
              Auto Select
              <div>
                <Button 
                  color="danger" 
                  variant="light" 
                  onPress={onClose}
                >
                  Deselect
                </Button>
                <Button 
                  color="primary" 
                  onPress={handleFormSubmit}
                  className="bg-green-500"
                >
                  Select
                </Button>
              </div>
            </ModalHeader>
            <ModalBody>
              <Tabs 
                aria-label="Auto Select Options" 
                selectedKey={selectedTab}
                className=""
                classNames={{
                    tabList:"dark:bg-slate-950"
                }}   
                onSelectionChange={(key) => setSelectedTab(key.toString())}
              >
                <Tab key="interfaces_ips" title="Interfaces IPs"></Tab>
                <Tab key="interfaces_tags" title="Interfaces Tags"></Tab>
                <Tab key="servers" title="Servers"></Tab>
                <Tab key="providers" title="Providers"></Tab>
              </Tabs>

              <Textarea
                    label="Input"
                    placeholder="Enter ......."
                    className="my-2 "
                    classNames={{
                        inputWrapper:"dark:bg-slate-950"
                    }}
                    value={formData.inputValue}
                    onChange={(e) => handleInputChange("inputValue", e.target.value)}
                  />

              <div className="flex gap-4 mb-4">
              <Select
                label="Type"
                placeholder="Select type"
                selectedKeys={[selectedType]}
                className="flex-1"
                classNames={{
                    innerWrapper: "dark:bg-slate-950 ", // Background for the dropdown
                    trigger: "dark:bg-slate-950 ", // Background for the select input
                }}
                onChange={(e) => {
                    setSelectedType(e.target.value);
                    handleInputChange("type", e.target.value);
                }}
                >
                {types.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                    {type.label}
                    </SelectItem>
                ))}
                </Select>

                <Select
                  label="IP Version"
                  placeholder="Select IP version"
                  selectedKeys={[selectedIpVersion]}
                  className="flex-1"
                  classNames={{
                    innerWrapper: "dark:bg-slate-950 ", // Background for the dropdown
                    trigger: "dark:bg-slate-950 ", // Background for the select input
                }}
                  onChange={(e) => {
                    setSelectedIpVersion(e.target.value);
                    handleInputChange("ipVersion", e.target.value);
                  }}
                >
                  {ipVersions.map((version) => (
                    <SelectItem key={version.value} value={version.value}>
                      {version.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
