"use client"
import React from 'react';
import { Input } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/react';

const OtherOptionsForm = () => {
  const [spfRange, setSpfRange] = React.useState("");
  const [version, setVersion] = React.useState("4.0r6");
  const [providerEmail, setProviderEmail] = React.useState(new Set(["none"]));
  const [geo, setGeo] = React.useState("");
  const [selectedCores, setSelectedCores] = React.useState('8');
  const coreOptions = ['2', '4', '8', '16', '32', '64'];

  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {/* SPF Range */}
        <Input
          label="SPF Range"
          placeholder="Ex: 190.15.108.20/24"
          variant="bordered"
          value={spfRange}
          onValueChange={setSpfRange}
          className="max-w-xs"
        />

        {/* Provider Email Account */}
        <Select
          label="Provider Email Account"
          variant="bordered"
          selectedKeys={providerEmail}
          className="max-w-xs"
        >
          <SelectItem key="none">None</SelectItem>
          <SelectItem key="email1">Email 1</SelectItem>
          <SelectItem key="email2">Email 2</SelectItem>
        </Select>

        {/* Geo */}
        <Input
          label="Geo"
          variant="bordered"
          value={geo}
          onValueChange={setGeo}
          className="max-w-xs"
        />
        

        {/* CPU Cores */}





<Select
          label="Select CPU Cores"
          variant="bordered"
          selectedKeys={[selectedCores]}
          className="max-w-xs"
          // onChange={e=>console.log(coreOptions.e.target.value)}
          onSelectionChange={(keys) => {
            const selectedValue = Array.from(keys)[0]; // Get the selected value
            console.log(selectedValue);
            // setSelectedCores(selectedValue); // Set selectedCores if needed
          }}
        >
    {coreOptions.map((option) => (
      <SelectItem key={option} value={option}>
        {option} Cores
      </SelectItem>
    ))}
        </Select>

      </div>
    </div>
  );
};

export default OtherOptionsForm;
