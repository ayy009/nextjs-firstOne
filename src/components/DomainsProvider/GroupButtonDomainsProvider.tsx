"use client"
import { addDomainProvider } from '@/actions/DomainsActions/DomainsProviderActions'
import { Button, ButtonGroup, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Select, SelectItem } from '@nextui-org/react'
import { Plus, SquareArrowOutUpRight, Trash2, X } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

interface Project {
  id: string;
  name: string;
}

interface GroupButtonDomainsProviderProps {
  projects: any;
  deleteDomainsProviderButton:any
}

interface ProviderFormData {
  provider: string;
  name: string;
  apiUser: string;
  apiKey: string;
  apiSecret: string;
  accountEmail: string;
  accountPassword: string;
  status: string;
  project: string;
}

function GroupButtonDomainsProvider({ projects, deleteDomainsProviderButton }: GroupButtonDomainsProviderProps) {
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  
  const [formData, setFormData] = useState<ProviderFormData>({
    provider: 'Namecheap',
    name: '',
    apiUser: '',
    apiKey: '',
    apiSecret: '',
    accountEmail: '',
    accountPassword: '',
    status: 'Active',
    project: 'None'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await addDomainProvider(formData)

    try {

    console.log(result)
      toast.success('Domain provider added successfully!');
      onAddClose();
      // Reset form
      setFormData({
        provider: 'Namecheap',
        name: '',
        apiUser: '',
        apiKey: '',
        apiSecret: '',
        accountEmail: '',
        accountPassword: '',
        status: 'Active',
        project: 'None'
      });
    } catch (error) {
      console.error('Error adding provider:', error);
      toast.error('Failed to add domain provider');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = () => {
    deleteDomainsProviderButton();
    onDeleteClose();
    toast.success('Domain provider(s) deleted successfully!');
  };

  const providers = [
    { label: "Namecheap", value: "Namecheap" },
    { label: "GoDaddy", value: "GoDaddy" },
    { label: "CloudFlare", value: "CloudFlare" },
    // Add other providers as needed
  ];

  const statuses = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  return (
    <>
      <div className='w-full mb-5 flex flex-col md:flex-row  md:justify-between'>
        <h2 className='text-4xl h-auto'>Domains Provider</h2>
        <ButtonGroup>
          <Button 
            size='sm' 
            className='py-5 text-gray my-3 md:my-0'
            color='danger'
            endContent={<Trash2/>}
            onClick={onDeleteOpen}
          >
            Delete
          </Button>
          <Button 
            size='sm' 
            className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
            endContent={<Plus/>}
            onClick={onAddOpen}
          >
            New Domain Provider
          </Button>
          <Button 
            size='sm' 
            className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
            endContent={<SquareArrowOutUpRight />}
          >
            Get Provider
          </Button>
        </ButtonGroup>
      </div>

      {/* Add Provider Modal */}
      <Modal 
        isOpen={isAddOpen} 
        onClose={onAddClose}
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
          <form >
            <ModalHeader className="flex justify-between items-center  px-6">
              <span className="text-lg font-medium">Add a New Domain Provider</span>
            </ModalHeader>
            <ModalBody className="px-6">
              <div className="flex flex-col gap-4">
                <div>
                  <Select 
                    name="provider"
                    value={formData.provider}
                    label="Provider"

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
                    value={formData.name}
                    label="Name"
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
                  label="API Secret(godaddy) /Account ID(cloudflare)"
                    name="apiSecret"
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
                  label="Account Password"
                    name="accountPassword"
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
                  label="Status"
                    name="status"
                    value={formData.status}
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
                  label="Project"
                    name="project"
                    value={formData.project}
                    onChange={handleSelectChange('project')}
                    classNames={{
                      trigger: "bg-gray-50 dark:bg-gray-800",
                    }}
                  >

                    {projects.map((project:any) => (
                      <SelectItem key={project.id} value={project.id}>
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
                onPress={onAddClose}
                className="hover:bg-red-50"
              >
                Close
              </Button>
              <Button 
                color="success"
                type="submit"
                className="bg-green-500 text-white hover:bg-green-600"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? 'Adding...' : 'Add Domain Provider'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        size="sm"
        className='dark:bg-gray-900'
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Confirm Deletion</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete the selected domain provider(s)? This action cannot be undone.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="default" variant="light" onPress={onDeleteClose}>
              Cancel
            </Button>
            <Button color="danger" onPress={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GroupButtonDomainsProvider

