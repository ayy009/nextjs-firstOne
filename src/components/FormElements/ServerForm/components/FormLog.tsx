import {Button, Textarea} from "@nextui-org/react";

export default function FormLog() {
  return (
    <div>
    <Textarea
      label="Description"
      variant="bordered"
      placeholder="Enter your description"
      disableAnimation
      disableAutosize
      classNames={{
        base: "w-full",
        input: "resize-y min-h-[200px]",
      }}
    />
    <div className="flex justify-center px-3 py-6">
    <Button
      color="primary"
      variant="solid"

    >
      Save & Install
    </Button>
  </div>
  </div>
  );
}