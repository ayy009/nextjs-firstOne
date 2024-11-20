'use client'

import React, { useState, useEffect } from "react"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { VerticalDotsIcon } from "../../vector/VerticalDotsIcon"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react"
import { deleteServers, getOneServer, handleSelectServerProviderServerSide, updateServer } from "@/actions/ServersActions/ServerTableActions"

interface Account {
  id: string
  project_type?: string | null
  username: string
}

interface ServerData {
  id: string;
  main_ip: string;
  ssh_password: string;
  serverprovider_id: string; // Changed from number to string to match usage
  serverprovider_email_account_id: number;
  os_installed: string;
  ssh_user: string;
  ssh_port: string;
  type: string;
  project_type: string;
  project_name: string;
  email_account: string;
  name: string;
  status: string;
  log: string;
  created_at: string;
  updated_at: string;
  installed_by: number;
  server_created_at: string | null;
  server_name: string | null;
  
}

interface ServerProvider {
  id: string
  name: string
}

function ActionsServerTable({ user, serverproviders }: { user: ServerData; serverproviders: ServerProvider[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const handleDelete = (id:any) => {
    console.log(id)
    if (confirm(`Are you sure you want to delete this server? id ${id}`)) {
      deleteServers(id)
    }
  }

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly size="sm" variant="light">
            <VerticalDotsIcon className="text-default-300" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>View</DropdownItem>
          <DropdownItem onPress={onOpen}>Edit</DropdownItem>
          <DropdownItem onClick={e=>{
            handleDelete(user.id)
          }}>Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <EditServerModal user={user} isOpen={isOpen} onOpenChange={onOpenChange} serverproviders={serverproviders} />
    </div>
  )
}

function EditServerModal({ user, isOpen, onOpenChange, serverproviders }: { 
  user: ServerData; 
  isOpen: boolean; 
  onOpenChange: () => void;
  serverproviders: ServerProvider[];
}) {
  const [accountsByID, setAccountsByID] = useState<Account[]>([])
  const [isHidden, setIsHidden] = useState(false)
  const [formData, setFormData] = useState<ServerData>(user)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpen && user.id) {
      fetchServerData(user.id);
    }
  }, [isOpen, user.id]);

  const fetchServerData = async (id: string) => {
    try {
      const data = await getOneServer(id)
      if (data.servers && data.servers[0]) {
        setFormData(data.servers[0]);
        await handleSelectServerProvider(data.servers[0].serverprovider_id)
      }
    } catch (error) {
      console.error("Error fetching server data:", error);
    }
  }

  const handleSelectServerProvider = async (id: string) => {
    try {
      const data = await handleSelectServerProviderServerSide(id)
      setAccountsByID(data.serverproviderEmailAccounts)
    } catch (error) {
      console.error("Error selecting server provider:", error);
    }
  }

  const handleEmailAccount = (e: string) => {
    
    const selectedAccount = accountsByID.find((element) => element.id == e)
    
    if (selectedAccount?.project_type != null) {
      handleChange("project_type", selectedAccount.project_type)
      handleChange("email_account", e)
      setIsHidden(false)
    } else {
      setIsHidden(true)
    }
  }

  const handleChange = (field: keyof ServerData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    console.log(formData)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await updateServer(formData)
      onOpenChange()
    } catch (error) {
      console.error("Error while editing server:", error instanceof Error ? error.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
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
            <ModalHeader className="flex flex-col gap-1">Edit Server</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <Textarea
                    label="Main IP"
                    value={formData.main_ip}
                    onChange={(e) => handleChange("main_ip", e.target.value)}
                    minRows={3}
                    variant="bordered"
                  />
                  <Select
                    label="Server Provider"
                    placeholder="Select provider"
                    selectedKeys={[formData.serverprovider_id.toString()]}
                    onChange={(e) => {
                      handleChange("serverprovider_id", e.target.value)
                      handleSelectServerProvider(e.target.value)
                    }}
                    variant="bordered"
                  >
                    {serverproviders.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {`${item.id}--${item.name}`}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="OS Installed"
                    selectedKeys={[formData.os_installed]}
                    onChange={(e) => handleChange("os_installed", e.target.value)}
                    variant="bordered"
                  >
                    <SelectItem key="centos7" value="centos7">Centos 7</SelectItem>
                    <SelectItem key="centos8" value="centos8">Centos 8</SelectItem>
                    <SelectItem key="ubuntu" value="ubuntu">Ubuntu</SelectItem>
                    <SelectItem key="debian" value="debian">Debian</SelectItem>
                  </Select>
                  <Input
                    type="text"
                    label="SSH Port"
                    value={formData.ssh_port}
                    onChange={(e) => handleChange("ssh_port", e.target.value)}
                    variant="bordered"
                  />
                </div>
                <div className="space-y-4">
                  <Textarea
                    label="SSH Password"
                    value={formData.ssh_password}
                    onChange={(e) => handleChange("ssh_password", e.target.value)}
                    minRows={3}
                    variant="bordered"
                  />
                  <Select
                    label="Email Account"
                    value={[formData.email_account]}
                    // selectedKeys={accountsByID[formData.email_account]}
                    // selectedKeys={accountsByID[parseInt(formData.email_account)] }
                    onChange={(e) => {
                      // console.log(accountsByID[parseInt(formData.email_account)])
                      // handleChange("email_account", e.target.value)
                      handleEmailAccount(e.target.value)
                    }}
                    variant="bordered"
                  >
                      {accountsByID && accountsByID.map((item: any) => (
                        <SelectItem key={item.id} value={item.id} >
                          {item.username}
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
                    selectedKeys={[formData.type]}
                    onChange={(e) => handleChange("type", e.target.value)}
                    
                    variant="bordered"
                  >
                    <SelectItem key="none" value="none">None</SelectItem>
                    <SelectItem key="type1" value="Type 1">Type 1</SelectItem>
                    <SelectItem key="type2" value="Type 2">Type 2</SelectItem>
                    <SelectItem key="type3" value="Type 3">Type 3</SelectItem>
                  </Select>
                  {isHidden && (
                    <Select
                      label="Project"
                      selectedKeys={[formData.project_type]}
                      onChange={(e) => handleChange("project_type", e.target.value)}
                      variant="bordered"
                    >
                      <SelectItem key="none" value="none">None</SelectItem>
                      <SelectItem key="global" value="global">Global</SelectItem>
                      <SelectItem key="pro" value="pro">Pro</SelectItem>
                    </Select>
                  )}
                </div>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose} className="mr-2">
                Cancel
              </Button>
              <Button color="primary" onClick={handleSubmit} isLoading={loading}>
                Save Changes
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export { ActionsServerTable, EditServerModal }