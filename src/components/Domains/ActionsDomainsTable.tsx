"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import { VerticalDotsIcon } from '../Tables/vector/VerticalDotsIcon'
import toast from 'react-hot-toast'
import { updateDomains } from '@/actions/DomainsActions/DomainsActions'

interface DomainProvider {
  id: string;
  name: string;
}

interface Domain {
  id: string;
  name: string;
  provider_name: string;
  domainprovider_id: string;
  expire_at: string;
  status: boolean;
}

interface ActionsDomainTableProps {
  domainproviders: DomainProvider[];
  domain: Domain;
  onUpdateDomain?: (id: string, data: any) => Promise<void>;
}

function ActionsDomainsTable({ domainproviders, domain, onUpdateDomain }: ActionsDomainTableProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    id:domain.id,
    name: domain.name,
    provider: domain.provider_name,
    expire_at: domain.expire_at.split('T')[0], // Extract only the date part
    status: domain.status,
    edit_provider: domain.domainprovider_id
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updateDomains(formData)
      toast.success('Domain updated successfully!');
      onClose();
    } catch (error) {
      console.error('Error updating domain:', error);
      toast.error('Failed to update domain');
    } finally {
      setIsSubmitting(false);
    }
  };

  const statuses = [
    { label: "Active", value: "true" },
    { label: "Inactive", value: "false" },
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
              <span className="text-lg font-medium">Edit Domain</span>
            </ModalHeader>
            <ModalBody className="px-6">
              <div className="flex flex-col gap-4">
                <div>
                  <Textarea
                  variant='bordered'
                    name="name"
                    label="Name"
                    placeholder="Enter domain name"
                    value={formData.name}
                    onChange={handleInputChange}
                    minRows={3}
                    required
                    classNames={{
                      input: "bg-gray-50 dark:bg-gray-800",
                      base: "max-w-full"
                    }}
                  />
                </div>

                <div>
                  <Select 
                    name="provider"
                    label="Provider"
                    selectedKeys={[formData.edit_provider.toString()]}
                    onChange={handleSelectChange('provider')}
                    classNames={{
                      trigger: "bg-gray-50 dark:bg-gray-800",
                    }}
                  >
                    {domainproviders.map((provider) => (
                      <SelectItem key={provider.id.toString()} value={provider.id.toString()}>
                        {provider.name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <div>
                  <Input
                  variant='bordered'
                    name="expire_at"
                    label="Expire At"
                    type="date"
                    value={formData.expire_at}
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
                    selectedKeys={[formData.status.toString()]}
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
              >
                {isSubmitting ? 'Updating...' : 'Update Domain'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ActionsDomainsTable

