import React, { useState } from "react";
import { Input, Textarea, Select, SelectItem, Button } from "@nextui-org/react";

export default function EmailHeaders() {
  const [formData, setFormData] = useState({
    header: "MIME-version: 1.0\nContent-Type: text/html;charset=UTF-8\nDate: [smtp_date]\nTo: [to]\nFrom: [from] <[random@[dom]>]\nSubject: [subject]\nList-Unsubscribe: <[random@[dom]>]",
    returnPath: "",
    testEmails: "",
    sendingType: "QueueNova",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="space-y-6">
      <Textarea
        label="Header"
        value={formData.header}
        onChange={(e) => handleChange('header', e.target.value)}
        rows={7}
        variant="bordered"
      />

      <Input
        label="Return Path"
        value={formData.returnPath}
        onChange={(e) => handleChange('returnPath', e.target.value)}
        variant="bordered"
      />

      <Textarea
        label="Test emails"
        value={formData.testEmails}
        onChange={(e) => handleChange('testEmails', e.target.value)}
        rows={3}
        variant="bordered"
      />

      <Select
        label="Sending Type"
        value={formData.sendingType}
        onChange={(e) => handleChange('sendingType', e.target.value)}
        variant="bordered"
      >
        <SelectItem key="queuenova" value="QueueNova">QueueNova</SelectItem>
        <SelectItem key="mandrill" value="Mandrill">Mandrill</SelectItem>
        <SelectItem key="sendgrid" value="SendGrid">SendGrid</SelectItem>
        <SelectItem key="custom" value="Custom">Custom</SelectItem>
      </Select>

      <Button 
       className="place-items-end w-full"
       color="primary"
       onClick={handleSubmit}>
        Test
      </Button>
    </div>
  );
}