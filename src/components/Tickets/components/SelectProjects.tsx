import { Select, SelectItem } from '@nextui-org/react'
import { UserSearch } from 'lucide-react'
import React from 'react'

const people = [
    { key: "john", label: "John Doe" },
    { key: "jane", label: "Jane Smith" },
    { key: "bob", label: "Bob Johnson" },
    { key: "alice", label: "Alice Williams" },
    { key: "tom", label: "Tom Davis" },
    { key: "emma", label: "Emma Wilson" },
    { key: "michael", label: "Michael Brown" },
    { key: "olivia", label: "Olivia Taylor" },
    { key: "david", label: "David Anderson" },
    { key: "sophia", label: "Sophia Martinez" },
    { key: "ryan", label: "Ryan Garcia" },
    { key: "isabella", label: "Isabella Hernandez" },
    { key: "daniel", label: "Daniel Gonzalez" },
  ];

  
function SelectProjects() {
  return (
    <div className='mb-3 md:mb-0 w-full md:w-2/6'>
              <Select
        className=" px-10 "
        classNames={{
          trigger: "dark:bg-slate-900",
        }}
        defaultSelectedKeys={["john"]}
        label="Filter Projects"
        placeholder="Filter Projects"
        startContent={<UserSearch />}
      >
        {people.map((person) => (
          <SelectItem
          
          key={person.key}>{person.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}

export default SelectProjects