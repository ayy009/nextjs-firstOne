"use client"
import { Button, ButtonGroup, useDisclosure } from '@nextui-org/react'
import { HardDriveDownload, Server, ServerCog, ServerOff } from 'lucide-react'
import React, { useState } from 'react'
import AddServerModel from './AddServerModel';
import Link from 'next/link';
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';
import { deleteServers } from '@/actions/ServersActions/ServerTableActions';

function GroupButton({data,selectedItems}: {
  data: any[], 
  handleDeleteServers: () => void,
  selectedItems:any
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deletionInProgress, setDeletionInProgress] = useState(false);

  const confirmAndDeleteServers = () => {
    onOpen(); // Open confirmation modal
  };

  const performServerDeletion = () => {
    try {
      setDeletionInProgress(true);
      handleDeleteServers(); // Your existing deletion logic
      
      // Success toast
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

      onOpenChange(); // Close modal
    } catch (error) {
      // Error toast
      toast.error('Failed to delete servers', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#F44336',
          color: 'white',
        },
      });
    } finally {
      setDeletionInProgress(false);
    }
  };

  const handleDeleteServers=async ()=>{

        let arr: number[] = [];
        if (typeof selectedItems === "string") {
          arr = selectedItems.split(",").map(Number);
        } else if (Array.isArray(selectedItems)) {
          // If it's already an array, convert each item to a number
          arr = selectedItems.map(Number).flat();
        }
       
        const data = await deleteServers(arr)
  }

  return (
    <div className='lg:flex justify-between'>
      {/* Toaster for notifications */}
      <Toaster />

      <h1 className='text-3xl ml-5'>servers</h1>
      <div className='flex flex-col md:flex-row justify-end pr-10 pb-6'>
        <ButtonGroup>
          <AddServerModel serverproviders={data}/>
          <Link 
            className='rounded-none'
            href={'/ipchange'}
          >
            <Button 
              radius="none"
              size='sm' 
              className='rounded-l-sm dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
              endContent={<ServerCog/>}
            >
              Add Server To Change IP
            </Button>
          </Link>
          <Button 
            size='sm' 
            className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
            endContent={<HardDriveDownload/>}
          >
            Install Server
          </Button>
          <Button 
            size='sm' 
            className='dark:bg-gray-800 py-5 text-gray-700 dark:text-gray-100'
            endContent={<Server/>}
          >
            Install Server Multihreading
          </Button>
          <Button 
            size='sm' 
            className='py-5 text-gray'
            color='danger'
            endContent={<ServerOff/>}
            onClick={confirmAndDeleteServers}
            isLoading={deletionInProgress}
          >
            Delete Servers Selected
          </Button>
        </ButtonGroup>
      </div>

      {/* Confirmation Modal */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm Server Deletion
              </ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to delete the selected servers? 
                  This action cannot be undone.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button 
                  color="default" 
                  variant="light" 
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button 
                  color="danger" 
                  onPress={performServerDeletion}
                  isLoading={deletionInProgress}
                >
                  Confirm Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default GroupButton