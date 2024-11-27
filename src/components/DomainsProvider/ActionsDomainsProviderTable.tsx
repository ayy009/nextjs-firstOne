"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'
import { VerticalDotsIcon } from '../Tables/vector/VerticalDotsIcon'
import toast from 'react-hot-toast'
import { updateDomainsProvider } from '@/actions/DomainsActions/DomainsProviderActions'

interface ActionsDomainsProviderTableProps {
  domainProvider: any;
  projects: any;
}

function ActionsDomainsProviderTable({ domainProvider, projects }: ActionsDomainsProviderTableProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState<any>({
        id: domainProvider.id,
        provider: domainProvider.provider,
        name: domainProvider.name,
        apiUser: domainProvider.api_user,
        apiKey: domainProvider.api_key,
        apiSecret: domainProvider.api_secret,
        accountEmail: domainProvider.account_email,
        accountPassword: domainProvider.account_password,
        status: domainProvider.status,
        project: domainProvider.project,
        project_id: domainProvider.project_id,
    });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev:any) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev:any) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    

    setIsSubmitting(true);
    try {
      const result = await updateDomainsProvider(formData)
      toast.success('Domain provider updated successfully!');
      onClose();
    } catch (error) {
      console.error('Error updating provider:', error);
      toast.error('Failed to update domain provider');
    } finally {
      setIsSubmitting(false);
    }
  };

  const providers = [
    { label: "Namecheap", value: "namecheap" },
    { label: "GoDaddy", value: "goddady" },
    { label: "CloudFlare", value: "cloudflare" },
  ];

  const statuses = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  return (
    <div className="relative flex items-center justify-end gap-2">
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly size="sm" variant="light">
            <VerticalDotsIcon className="text-default-300" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onPress={onOpen}>Edit</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size="2xl"
        className='mt-2'
        classNames={{
          header: "border-b border-gray-200",
          body: "py-6",
          base: "bg-white dark:bg-gray-900",
          closeButton: "hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2",
        }}
      >
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex justify-between items-center px-6">
              <span className="text-lg font-medium">Edit Domain Provider</span>
            </ModalHeader>
            <ModalBody className="px-6">
              <div className="flex flex-col gap-4">
                <div>
                  <Select 
                    name="provider"
                    label="Provider"
                    selectedKeys={[formData.provider]}
                    onChange={handleSelectChange('provider')}
                    classNames={{
                      trigger: "bg-gray-50 dark:bg-gray-800",
                    }}
                  >
                    {providers.map((provider) => (
                      <SelectItem key={provider.value} value={provider.value}>
                        {provider.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <div>
                  <Input
                    variant='bordered'
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    classNames={{
                      input: "bg-gray-50 dark:bg-gray-800",
                      
                    }}
                  />
                </div>

                <div>
                  <Input
                  variant='bordered'
                    name="apiUser"
                    label="API User"
                    value={formData.apiUser}
                    onChange={handleInputChange}
                    required
                    classNames={{
                      input: "bg-gray-50 dark:bg-gray-800",
                    }}
                  />
                </div>

                <div>
                  <Input
                  variant='bordered'
                    name="apiKey"
                    label="API Key"
                    value={formData.apiKey}
                    onChange={handleInputChange}
                    required
                    classNames={{
                      input: "bg-gray-50 dark:bg-gray-800",
                    }}
                  />
                </div>

                <div>
                  <Input
                  variant='bordered'
                    name="apiSecret"
                    label="API Secret(godaddy) /Account ID(cloudflare)"
                    value={formData.apiSecret}
                    onChange={handleInputChange}
                    required
                    classNames={{
                      input: "bg-gray-50 dark:bg-gray-800",
                    }}
                  />
                </div>

                <div>
                  <Input
                  variant='bordered'
                    name="accountEmail"
                    label="Account Email"
                    type="email"
                    value={formData.accountEmail}
                    onChange={handleInputChange}
                    required
                    classNames={{
                      input: "bg-gray-50 dark:bg-gray-800",
                    }}
                  />
                </div>

                <div>
                  <Input
                  variant='bordered'
                    name="accountPassword"
                    label="Account Password"
                    type="password"
                    value={formData.accountPassword}
                    onChange={handleInputChange}
                    required
                    classNames={{
                      input: "bg-gray-50 dark:bg-gray-800",
                    }}
                  />
                </div>

                <div>
                  <Select 
                    name="status"
                    label="Status"
                    selectedKeys={[formData.status ? "Active" : "Inactive"]}
                    onChange={handleSelectChange('status')}
                    classNames={{
                      trigger: "bg-gray-50 dark:bg-gray-800",
                    }}
                  >
                    {statuses.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <div>
                  <Select 
                    name="project"
                    label="Project"
                    selectedKeys={formData.project_id ? [formData.project_id.toString()] : []}
                    onChange={handleSelectChange('project')}
                    classNames={{
                        trigger: "bg-gray-50 dark:bg-gray-800",
                    }}
                  >
                    {projects.map((project:any) => (
                      <SelectItem key={project.id.toString()} value={project.id.toString()}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="border-t border-gray-200 px-6 py-3">
              <Button 
                color="danger" 
                variant="light" 
                onPress={onClose}
                className="hover:bg-red-50"
              >
                Cancel
              </Button>
              <Button 
                color="primary"
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-600"
                disabled={isSubmitting}
                onClick={(e)=>handleSubmit(e)}
              >
                {isSubmitting ? 'Updating...' : 'Update Domain Provider'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ActionsDomainsProviderTable

