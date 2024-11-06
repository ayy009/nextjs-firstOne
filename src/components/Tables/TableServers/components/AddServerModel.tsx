"use client"
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
  SelectItem
} from "@nextui-org/react";
import { HardDrive } from "lucide-react";

export default function AddServerModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [formData, setFormData] = useState({
    mainIP: '',
    sshPassword: '',
    serverProvider: '',
    emailAccount: 'none',
    osInstalled: 'centos7',
    sshUser: 'root',
    sshPort: '22',
    type: 'none'
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    onOpenChange();
  };

  return (
    <>
      <Button 
        size="sm"
        className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
        onPress={onOpen} 
        // color="primary"
        endContent={<HardDrive  />}
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
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Textarea
                    
                      label="Main IP"
                      placeholder="Ex: 190.15.108.20"
                      value={formData.mainIP}
                      onChange={(e) => handleChange('mainIP', e.target.value)}
                      minRows={3}
                      variant="bordered"
                    />
                    
                    <Select
                      label="Server Provider"
                      placeholder="Select provider"
                      value={formData.serverProvider}
                      onChange={(e) => handleChange('serverProvider', e.target.value)}
                      variant="bordered"
                    >
                      <SelectItem key="aws" value="aws">AWS</SelectItem>
                      <SelectItem key="gcp" value="gcp">Google Cloud</SelectItem>
                      <SelectItem key="azure" value="azure">Azure</SelectItem>
                      <SelectItem key="digitalocean" value="digitalocean">DigitalOcean</SelectItem>
                    </Select>

                    <Select
                      label="OS Installed"
                      value={formData.osInstalled}
                      onChange={(e) => handleChange('osInstalled', e.target.value)}
                      defaultSelectedKeys={["centos7"]}
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
                      value={formData.sshPort}
                      onChange={(e) => handleChange('sshPort', e.target.value)}
                      variant="bordered"
                    />
                  </div>

                  <div className="space-y-4">
                    <Textarea
                      label="SSH Password"
                      placeholder="Enter SSH Password"
                      value={formData.sshPassword}
                      onChange={(e) => handleChange('sshPassword', e.target.value)}
                      minRows={3}
                      variant="bordered"
                    />

                    <Select
                      label="Email Account"
                      value={formData.emailAccount}
                      onChange={(e) => handleChange('emailAccount', e.target.value)}
                      defaultSelectedKeys={["none"]}
                      variant="bordered"
                    >
                      <SelectItem key="none" value="none">None</SelectItem>
                      <SelectItem key="gmail" value="gmail">Gmail</SelectItem>
                      <SelectItem key="outlook" value="outlook">Outlook</SelectItem>
                      <SelectItem key="custom" value="custom">Custom</SelectItem>
                    </Select>

                    <Input
                      type="text"
                      label="SSH User"
                      value={formData.sshUser}
                      onChange={(e) => handleChange('sshUser', e.target.value)}
                      variant="bordered"
                    />

                    <Select
                      label="Type"
                      value={formData.type}
                      onChange={(e) => handleChange('type', e.target.value)}
                      defaultSelectedKeys={["none"]}
                      variant="bordered"

                    >
                      <SelectItem key="none" value="none">None</SelectItem>
                      <SelectItem key="type1" value="type1">Type 1</SelectItem>
                      <SelectItem key="type2" value="type2">Type 2</SelectItem>
                      <SelectItem key="type3" value="type3">Type 3</SelectItem>
                    </Select>
                  </div>
                </form>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} className="mr-2">
                  Cancel
                </Button>
                <Button color="primary" 
                onClick={handleSubmit}
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