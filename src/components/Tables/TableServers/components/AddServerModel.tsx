"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { HardDrive } from "lucide-react";
import { addServer, handleSelectServerProviderServerSide } from "@/actions/ServersActions/ServerTableActions";
interface Account {
  id: string
  project_type?: string | null
  username: string
}

export default function AddServerModal({ serverproviders }: any) {
  const [accountsByID, setAccountsByID] = useState<Account[]>([])
  // const [accountsByID, setAccountsByID] = useState([]);
  const [isHidden, setIsHidden] = useState(false)



  const handleSelectServerProvider = async (id:string) => {

    const data = await handleSelectServerProviderServerSide(id)   
    setAccountsByID(data.serverproviderEmailAccounts);
    setFormData((prev) => ({ ...prev, ["serverProvider"]: id }));
    

  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    main_ip: "",
    ssh_password: "",
    serverProvider: "",
    emailAccount: "",
    osInstalled: "centos7",
    ssh_user: "root",
    sshPort: "22",
    type: "none",
    project: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await addServer(formData);
      console.log("Server added successfully:", result);

      // Clear form and close modal
      setFormData({
        main_ip: "",
        ssh_password: "",
        serverProvider: "",
        emailAccount: "",
        osInstalled: "centos7",
        ssh_user: "root",
        sshPort: "22",
        type: "none",
        project: "",
      });
      onOpenChange();
    } catch (error: any) {
      console.error("Error while adding server:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // const handleEmailAcount = (e:string)=>{
  //   const selectedAccount:any = accountsByID.find(
  //     (element: Account) => element.id == e
  //   );
  //       if (selectedAccount?.project_type != null || selectedAccount) {
  //     // If `project_type` is not null, set the form field value directly
  //     handleChange("project", selectedAccount.project_type);
  //     return null; // Return nothing to avoid rendering the Select component
  //   } else(
  //     setIsHidden(true)
  //   )

  // }
  const handleEmailAccount = (e: string) => {
    
    const selectedAccount = accountsByID.find((element) => element.id == e)
    
    if (selectedAccount?.project_type != null) {
      handleChange("project_type", selectedAccount.project_type)
      handleChange("emailAccount", e)
      setIsHidden(false)
    } else {
      setIsHidden(true)
    }
  }

  return (
    <>
      <Button
        size="sm"
        className="py-5 text-gray-700 dark:bg-gray-800 dark:text-gray-100"
        onPress={onOpen}
        endContent={<HardDrive />}
      >
        Add Server
      </Button>

      <Modal
        className="dark:bg-gray-800"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="3xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New Server
              </ModalHeader>

              <ModalBody>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                  <div className="space-y-4">
                    <Textarea
                      label="Main IP"
                      placeholder="Ex: 190.15.108.20"
                      value={formData.main_ip}
                      onChange={(e) => handleChange("main_ip", e.target.value)}
                      minRows={3}
                      variant="bordered"
                    />

                    {/* <Select
                      label="Server Provider"
                      placeholder="Select provider"                    
        
                      onChange={(e) => {
                        
                        handleSelectServerProvider(e.target.value);
                        
                      }}
                      variant="bordered"
                    >
                      {serverproviders.map((items: any) => (
                        <SelectItem key={items.id} value={items}>
                          {items.id}--{items.name}
                        </SelectItem>
                      ))}
                    </Select> */}
                    <Select
  label="Server Provider"
  placeholder="Select provider"
  selectedKeys={[formData.serverProvider]}
  onChange={(e) => {
    handleSelectServerProvider(e.target.value);
  }}
  variant="bordered"
>
  {serverproviders.map((items: any) => (
    <SelectItem key={items.id} value={items.id}>
      {items.id}--{items.name}
    </SelectItem>
  ))}
</Select>

                    <Select
                      label="OS Installed"
                      value={formData.osInstalled}
                      onChange={(e) =>
                        handleChange("osInstalled", e.target.value)
                      }
                      defaultSelectedKeys={["centos7"]}
                      variant="bordered"
                    >
                      <SelectItem key="centos7" value="centos7">
                        Centos 7
                      </SelectItem>
                      <SelectItem key="centos8" value="centos8">
                        Centos 8
                      </SelectItem>
                      <SelectItem key="ubuntu" value="ubuntu">
                        Ubuntu
                      </SelectItem>
                      <SelectItem key="debian" value="debian">
                        Debian
                      </SelectItem>
                    </Select>

                    <Input
                      type="text"
                      label="SSH Port"
                      value={formData.sshPort}
                      onChange={(e) => handleChange("sshPort", e.target.value)}
                      variant="bordered"
                    />
                  </div>

                  <div className="space-y-4">
                    <Textarea
                      label="SSH Password"
                      placeholder="Enter SSH Password"
                      value={formData.ssh_password}
                      onChange={(e) =>
                        handleChange("ssh_password", e.target.value)
                      }
                      minRows={3}
                      variant="bordered"
                    />

                    <Select
                      label="Email Account"
                      // selectedKeys={[accountsByID[parseInt(formData.emailAccount)]]}
                      // value={accountsByID[emailAccount]}
                      onChange={(e) =>{
                        
                        // handleChange("emailAccount", e.target.value) 
                        handleEmailAccount(e.target.value)
                      }

                      }
                      variant="bordered"
                    >
                      {accountsByID && accountsByID.map((item: any) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.username}--{item.id}
                        </SelectItem>
                      ))}
                    </Select>

                    <Input
                      type="text"
                      label="SSH User"
                      value={formData.ssh_user}
                      onChange={(e) => handleChange("ssh_user", e.target.value)}
                      variant="bordered"
                    />

                    <Select
                      label="Type"
                      value={formData.type}
                      onChange={(e) => handleChange("type", e.target.value)}
                      defaultSelectedKeys={["none"]}
                      variant="bordered"
                    >
                      <SelectItem key="none">None</SelectItem>
                      <SelectItem key="type1" value="vps">
                        Type 1
                      </SelectItem>
                      <SelectItem key="type2" value="vps">
                        Type 2
                      </SelectItem>
                      <SelectItem key="type3" value="vps">
                        Type 3
                      </SelectItem>
                    </Select>

                    {/* { accountsByID.emailAccount.project_type == null */}
                    
                    {

        <Select
          label="Project"
          value={formData.project}
          onChange={(e) => handleChange("project", e.target.value)}
          defaultSelectedKeys={["none"]}
          variant="bordered"
          className={isHidden ? "block" : "hidden"}
        >
          <SelectItem key="none">None</SelectItem>
          <SelectItem key="type1" value="global">
            Global
          </SelectItem>
          <SelectItem key="type2" value="pro">
            Pro
          </SelectItem>
        </Select>

}

                  </div>
                </form>
              </ModalBody>

              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="mr-2"
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onClick={handleSubmit}
                  isLoading={loading}
                >
                  Add Server
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
