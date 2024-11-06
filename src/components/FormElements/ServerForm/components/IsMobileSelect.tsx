'use client'
import React from 'react'
import { Select, SelectItem } from "@nextui-org/react"
import { CloudDownload, Plus, Cog, Undo, Copy, Trash2 } from 'lucide-react'
export default function IsMobileSelect() {
  const actions = [
    { key: 'get-ips', label: 'Get Server IPs', icon: CloudDownload },
    { key: 'add-interfaces', label: 'Add Interfaces', icon: Plus },
    { key: 'get-ptr', label: 'Get PTR', icon: Cog },
    { key: 'ptr', label: 'PTR', icon: Undo },
    { key: 'selected', label: 'Selected', icon: Copy },
    { key: 'all', label: 'All', icon: Trash2 },
  ]
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAction = actions.find(action => action.key === e.target.value)
    if (selectedAction) {
      console.log(`Performing action: ${selectedAction.label}`)
      // Add your action logic here
    }
  }
  return (
    <div className="flex flex-col md:flex-row justify-end p-0 ">
      <Select
        size="sm"
        label="Select an action"
        className="max-w-xs dark:bg-gray-800"
        onChange={handleSelectionChange}
      >
        {actions.map((action) => (
          <SelectItem key={action.key} value={action.key} textValue={action.label}>
            <div className="flex items-center gap-2">
              <action.icon className="w-4 h-4" />
              <span>{action.label}</span>
            </div>
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
