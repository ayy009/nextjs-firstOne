"use client"
import { addDomain, deleteDomains } from '@/actions/DomainsActions/DomainsActions';
import { Button, ButtonGroup, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import { Plus, SeparatorHorizontal, Trash2, X } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

interface DomainProvider {
  id: string;
  name: string;
}

interface GroupButtonDomainsProps {
  domainproviders: DomainProvider[];
  // deleteDomainButton?: () => void;
  items?: any;
}

function GroupButtonDomains({ domainproviders, items }: GroupButtonDomainsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDeleteModalOpen, onOpen: onDeleteModalOpen, onClose: onDeleteModalClose } = useDisclosure();
  const [formData, setFormData] = useState({
    names: '',
    provider: '',
    expire_at: '',
    status: 'active'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const deleteDomainButton = async ()=>{
    // "use server"
    const selectedItems = items;

    let arr: number[] = [];
    if (typeof selectedItems === "string") {
      arr = selectedItems.split(",").map(Number);
    } else if (Array.isArray(selectedItems)) {
      // If it's already an array, convert each item to a number
      arr = selectedItems.map(Number).flat();
    }
    
    const data = await deleteDomains(arr)
    // console.log(arr);
  }

  const handleSelectChange = (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await addDomain(formData);
      toast.success('Domain added successfully!');
      onClose();
      // Reset form data
      setFormData({
        names: '',
        provider: '',
        expire_at: '',
        status: 'active'
      });
    } catch (error) {
      console.error('Error adding domain:', error);
      toast.error('Failed to add domain. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = () => {
    deleteDomainButton();
    onDeleteModalClose();
    toast.success('Domain(s) deleted successfully!');
  };

  const statuses = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  return (
    <>
      <div className='w-full mb-5 flex  flex-col md:flex-row  md:justify-between'>
        <h2 className='text-4xl h-auto my-3 md:my-0'>Domains</h2>
        <ButtonGroup>
          <Button 
            size='sm' 
            className='py-5 text-gray'
            color='danger'
            endContent={<Trash2/>}
            onClick={onDeleteModalOpen}
          >
            Delete
          </Button>
          <Button 
            size='sm' 
            className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
            endContent={<Plus/>}
            onClick={onOpen}
          >
            New Domain
          </Button>
          <Button 
            size='sm' 
            className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
            endContent={<SeparatorHorizontal />}
          >
            New Domain By Api
          </Button>
        </ButtonGroup>
      </div>

      {/* Add Domain Modal */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size="2xl"
        classNames={{
          header: "border-b border-gray-200",
          body: "py-6",
          base: "bg-white dark:bg-gray-900",
          closeButton: "hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2",
        }}
      >
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex justify-between items-center py-3 px-6">
              <span className="text-lg font-medium">Add a New Domain</span>
            </ModalHeader>
            <ModalBody className="px-6">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Names</label>
                  <Textarea
                    variant="bordered"
                    name="names"
                    placeholder="Enter domain names"
                    minRows={3}
                    required
                    value={formData.names}
                    onChange={handleInputChange}
                    classNames={{
                      input: "bg-gray-50 dark:bg-gray-800",
                      base: "max-w-full"
                    }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Provider</label>
                  <Select 
                    name="provider"
                    value={formData.provider}
                    onChange={handleSelectChange('provider')}
                    classNames={{
                      trigger: "bg-gray-50 dark:bg-gray-800",
                    }}
                  >
                    {domainproviders.map((provider) => (
                      <SelectItem key={provider.id} value={provider.id}>
                        {provider.name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Expire At</label>
                  <Input
                  variant='bordered'
                    name="expire_at"
                    type="date"
                    placeholder="jj/mm/aaaa"
                    required
                    value={formData.expire_at}
                    onChange={handleInputChange}
                    classNames={{
                      input: "bg-gray-50 dark:bg-gray-800",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Status</label>
                  <Select 
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
              </div>
            </ModalBody>
            <ModalFooter className="border-t border-gray-200 px-6 py-3">
              <Button 
                color="danger" 
                variant="light" 
                onPress={onClose}
                className="hover:bg-red-50"
              >
                Close
              </Button>
              <Button 
                color="success"
                type="submit"
                className="bg-green-500 text-white hover:bg-green-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Adding...' : 'Add Domain'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={onDeleteModalClose}
        size="sm"
        className='dark:bg-gray-900'
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Confirm Deletion</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete the selected domain(s)? This action cannot be undone.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="default" variant="light" onPress={onDeleteModalClose}>
              Cancel
            </Button>
            <Button color="danger" onPress={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {submitSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg">
          Domain added successfully!
        </div>
      )}
    </>
  )
}

export default GroupButtonDomains

