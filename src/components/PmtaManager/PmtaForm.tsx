"use client";
import React from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";


const PmtaForm = () => {
  // Form state
  const [command, setCommand] = React.useState("");
  const [domain, setDomain] = React.useState("*");
  const [autoCommand, setAutoCommand] = React.useState("");

  // Event handlers
  const handleStart = () => {
    console.log("Start clicked with:", { command, domain, autoCommand });
  };

  const handleStop = () => {
    console.log("Stop clicked.");
  };

  return (
    <div className="p-6  my-auto  w-full md:w-2/6">
     

      

        <div className="mb-2">
            {/* Command Selection */}
                <Input
                label="Select a command:"
                placeholder="Enter command"
                variant="bordered"
                value={command}
                onValueChange={(value) => setCommand(value)}
                className="w-full "
                />

            {/* Domain Input */}
                <Input
                label="Domain:"
                placeholder="*"
                variant="bordered"
                value={domain}
                onValueChange={(value) => setDomain(value)}
                className="w-full mt-5"
                />
            {/* Auto Command */}
                <Input
                label="Auto Command:"
                placeholder="Ex: 60 Second"
                variant="bordered"
                value={autoCommand}
                onValueChange={(value) => setAutoCommand(value)}
                className="w-full mt-5"
                />

                <div className="flex justify-start space-x-4 mt-4">
                {/* Start Button */}
                <Button color="primary" variant="solid" onClick={handleStart}>
                Start
                </Button>

                {/* Stop Button */}
                <Button color="primary" variant="solid" onClick={handleStop}>
                Stop
                </Button>
            </div>
        </div>

        <div>
        <Textarea
      label="logs:"
      variant="bordered"
      placeholder="...."
      disableAnimation
      disableAutosize
      classNames={{
        base: "w-full",
        input: "resize-y min-h-[150px]",
      }}
    />
            {/* <PmtaGroupButton/> */}
        </div>


    </div>
  );
};

export default PmtaForm;
