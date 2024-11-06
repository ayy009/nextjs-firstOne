"use client"
import React from 'react';
import { Input } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/react';
import { Button } from '@nextui-org/button';

interface FormData {
  serverProvider: string;
  mainIP: string;
  sshPassword: string;
  sshPort: string;
  sshAuthType: string;
  projectType: string;
  sshUser: string;
  type: string;
  webServerType: string;
}

const serverOptions = ['httpd', 'nginx'];

const DeliveryServerForm = () => {
  // Form data state
  const [formData, setFormData] = React.useState<FormData>({
    serverProvider: "p1000",
    mainIP: "",
    sshPassword: "",
    sshPort: "22",
    sshAuthType: "",
    projectType: "",
    sshUser: "",
    type: "VPS",
    webServerType: "httpd",
  });

  // Selected values for dropdowns using Set
  const [serverProviderSelected, setServerProviderSelected] = React.useState<Set<string>>(new Set([formData.serverProvider]));
  const [sshAuthTypeSelected, setSSHAuthTypeSelected] = React.useState<Set<string>>(new Set([formData.sshAuthType]));
  const [projectTypeSelected, setProjectTypeSelected] = React.useState<Set<string>>(new Set([]));
  const [typeSelected, setTypeSelected] = React.useState<Set<string>>(new Set([formData.type]));

  // Touched states
  const [touched, setTouched] = React.useState<Record<string, boolean>>({
    mainIP: false,
    sshPassword: false,
    projectType: false,
  });

  // Validation functions
  const validateIP = (value: string) => value.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/);
  const validatePassword = (value: string) => value.length >= 6;

  // Invalid states using useMemo
  const isIPInvalid = React.useMemo(() => {
    if (formData.mainIP === "" && !touched.mainIP) return false;
    return !validateIP(formData.mainIP);
  }, [formData.mainIP, touched.mainIP]);

  const isPasswordInvalid = React.useMemo(() => {
    if (formData.sshPassword === "" && !touched.sshPassword) return false;
    return !validatePassword(formData.sshPassword);
  }, [formData.sshPassword, touched.sshPassword]);

  const isProjectInvalid = React.useMemo(() => {
    if (!touched.projectType) return false;
    return projectTypeSelected.size === 0;
  }, [projectTypeSelected, touched.projectType]);

  // Handle form data changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle select changes
  const handleSelectChange = (field: keyof FormData, value: Set<string>) => {
    const selectedValue = Array.from(value)[0] || "";
    setFormData(prev => ({
      ...prev,
      [field]: selectedValue
    }));

    // Update corresponding Set state
    switch (field) {
      case 'serverProvider':
        setServerProviderSelected(value);
        break;
      case 'sshAuthType':
        setSSHAuthTypeSelected(value);
        break;
      case 'projectType':
        setProjectTypeSelected(value);
        break;
      case 'type':
        setTypeSelected(value);
        break;
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    setTouched({
      mainIP: true,
      sshPassword: true,
      projectType: true,
    });

    // Check if form is valid
    if (isIPInvalid || isPasswordInvalid || isProjectInvalid) {
      console.log("Form has validation errors");
      return;
    }

    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {/* Server Provider */}
        <Select
          label="Server Provider"
          variant="bordered"
          selectedKeys={serverProviderSelected}
          className="max-w-xs"
          onSelectionChange={(keys) => handleSelectChange('serverProvider', keys as Set<string>)}
        >
          <SelectItem key="p1000">p1000</SelectItem>
          <SelectItem key="p1001">p1001</SelectItem>
          <SelectItem key="p1002">p1002</SelectItem>
          <SelectItem key="p1003">p1003</SelectItem>
        </Select>

        {/* Main IP */}
        <Input
          label="Main IP"
          placeholder="ex: 192.168.109.20"
          variant="bordered"
          value={formData.mainIP}
          errorMessage={isIPInvalid ? "Please enter a valid IP address" : ""}
          onValueChange={(value) => handleInputChange('mainIP', value)}
          onBlur={() => setTouched(prev => ({ ...prev, mainIP: true }))}
          className="max-w-xs"
        />

        {/* SSH Password */}
        <Input
          label="SSH Password"
          type="password"
          variant="bordered"
          value={formData.sshPassword}
          errorMessage={isPasswordInvalid ? "Password must be at least 6 characters" : ""}
          onValueChange={(value) => handleInputChange('sshPassword', value)}
          onBlur={() => setTouched(prev => ({ ...prev, sshPassword: true }))}
          className="max-w-xs"
        />

        {/* SSH Port */}
        <Input
          label="SSH Port"
          variant="bordered"
          value={formData.sshPort}
          onValueChange={(value) => handleInputChange('sshPort', value)}
          className="max-w-xs"
        />

        {/* SSH Auth Type */}
        <Select
          label="SSH Auth Type"
          variant="bordered"
          selectedKeys={sshAuthTypeSelected}
          className="max-w-xs"
          onSelectionChange={(keys) => handleSelectChange('sshAuthType', keys as Set<string>)}
        >
          <SelectItem key="plain_password">Plain Password</SelectItem>
        </Select>

        {/* Project Type */}
        <Select
          label="Project Type"
          variant="bordered"
          placeholder="Select project type"
          selectedKeys={projectTypeSelected}
          className="max-w-xs"
          errorMessage={isProjectInvalid ? "Please select a project type" : ""}
          onSelectionChange={(keys) => handleSelectChange('projectType', keys as Set<string>)}
          onClose={() => setTouched(prev => ({ ...prev, projectType: true }))}
        >
          <SelectItem key="type1">Type 1</SelectItem>
          <SelectItem key="type2">Type 2</SelectItem>
        </Select>

        {/* SSH User */}
        <Input
          label="SSH User"
          variant="bordered"
          value={formData.sshUser}
          onValueChange={(value) => handleInputChange('sshUser', value)}
          className="max-w-xs"
        />

        {/* Type */}
        <Select
          label="Type"
          variant="bordered"
          selectedKeys={typeSelected}
          className="max-w-xs"
          onSelectionChange={(keys) => handleSelectChange('type', keys as Set<string>)}
        >
          <SelectItem key="VPS">VPS</SelectItem>
        </Select>

        {/* Web Server Type */}
        <div className="w-full flex px-4 items-center  ">
          <h2 className=" text-gray-700 dark:text-white mb-2 mr-2">Web Server Type</h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            {serverOptions.map((option) => (
              <button
                key={option}
                role="radio"
                aria-checked={formData.webServerType === option}
                onClick={() => handleInputChange('webServerType', option)}
                className={`w-full sm:w-auto px-4 h-10 rounded-md text-sm font-medium transition-colors ${
                  formData.webServerType === option
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                } cursor-pointer`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Test SSH Connection Button */}
      <div className="flex justify-center mt-10">
        <Button 
        
        color="primary" variant="solid" onClick={handleSubmit}>
          Test SSH Connection
        </Button>
      </div>
    </div>
  );
};

export default DeliveryServerForm;
