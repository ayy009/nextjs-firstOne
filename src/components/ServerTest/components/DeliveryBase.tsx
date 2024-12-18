"use client"

import React from "react"
import { Button, ScrollShadow, Card, CardBody, CardHeader, Input } from "@nextui-org/react"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from 'lucide-react'

interface ServerItem {
  id: number;
  label: string;
}

export default function DeliveryBase({ 
  data,
  SetControlSetServerSelect,
  setRightItems,
  rightItems,
  setLeftItems,
  leftItems
}: { 
  data: ServerItem[];
  SetControlSetServerSelect?: (items: ServerItem[]) => void;
  setRightItems: React.Dispatch<React.SetStateAction<ServerItem[]>>;
  rightItems: ServerItem[];
  setLeftItems: React.Dispatch<React.SetStateAction<ServerItem[]>>;
  leftItems: ServerItem[];
}) {
  const [selectedLeft, setSelectedLeft] = React.useState<ServerItem[]>([])
  const [selectedRight, setSelectedRight] = React.useState<ServerItem[]>([])
  const [leftSearch, setLeftSearch] = React.useState("")
  const [rightSearch, setRightSearch] = React.useState("")

  const filteredLeftItems = leftItems.filter((item) =>
    `${item.id} - ${item.label}`.toLowerCase().includes(leftSearch.toLowerCase())
  )
  
  const filteredRightItems = rightItems.filter((item) =>
    `${item.id} - ${item.label}`.toLowerCase().includes(rightSearch.toLowerCase())
  )

  React.useEffect(() => {
    if(SetControlSetServerSelect) SetControlSetServerSelect(rightItems)
  }, [leftItems, rightItems, SetControlSetServerSelect])

  const handleSelect = (item: ServerItem, side: "left" | "right") => {
    if (side === "left") {
      setSelectedLeft((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      )
      setSelectedRight([])
    } else {
      setSelectedRight((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      )
      setSelectedLeft([])
    }
  }

  const handleDoubleClick = (item: ServerItem, from: "left" | "right") => {
    if (from === "left") {
      setLeftItems(leftItems.filter((i) => i !== item))
      setRightItems([...rightItems, item])
    } else {
      setRightItems(rightItems.filter((i) => i !== item))
      setLeftItems([...leftItems, item])
    }
    setSelectedLeft([])
    setSelectedRight([])
  }

  const moveSelected = (direction: "right" | "left") => {
    if (direction === "right" && selectedLeft.length) {
      setRightItems([...rightItems, ...selectedLeft])
      setLeftItems(leftItems.filter((item) => !selectedLeft.includes(item)))
      setSelectedLeft([])
    } else if (direction === "left" && selectedRight.length) {
      setLeftItems([...leftItems, ...selectedRight])
      setRightItems(rightItems.filter((item) => !selectedRight.includes(item)))
      setSelectedRight([])
    }
  }

  const moveAll = (direction: "right" | "left") => {
    if (direction === "right") {
      setRightItems([...rightItems, ...filteredLeftItems])
      setLeftItems(leftItems.filter((item) => !filteredLeftItems.includes(item)))
    } else {
      setLeftItems([...leftItems, ...filteredRightItems])
      setRightItems(rightItems.filter((item) => !filteredRightItems.includes(item)))
    }
    setSelectedLeft([])
    setSelectedRight([])
  }

  return (
    <div className="flex flex-col gap-4 p-4 max-w-4xl mx-auto">
      <div className="block md:flex gap-4">
        <Card className="flex-1 dark:bg-slate-950">
          <CardHeader className="flex justify-around">
            <h2 className="text-lg font-semibold">Available Items</h2>
            <p>Available: {filteredLeftItems.length}</p>
          </CardHeader>
          <CardBody>
            <Input
              placeholder="Search available items"
              value={leftSearch}
              onChange={(e) => setLeftSearch(e.target.value)}
              startContent={<Search className="text-default-400" size={18} />}
              className="mb-4"
            />
            <ScrollShadow className="h-[300px]">
              {filteredLeftItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item, "left")}
                  onDoubleClick={() => handleDoubleClick(item, "left")}
                  className={`p-2 cursor-pointer rounded-md transition-colors ${
                    selectedLeft.includes(item)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-default-100"
                  }`}
                >
                   {item.label}
                </div>
              ))}
            </ScrollShadow>
          </CardBody>
        </Card>
        <div className="flex flex-row md:flex-col gap-2 my-4 md:my-0 justify-center ">
          <Button
            isIconOnly
            color="primary"
            variant="solid"
            onPress={() => moveAll("right")}
            isDisabled={filteredLeftItems.length === 0}
            aria-label="Move all to right"
          >
            <ChevronsRight className="h-4 w-4 rotate-90 md:rotate-0" />
          </Button>
          <Button
            color="primary"
            isIconOnly
            variant="solid"
            onPress={() => moveSelected("right")}
            isDisabled={selectedLeft.length === 0}
            aria-label="Move selected to right"
          >
            <ChevronRight className="h-4 w-4 rotate-90 md:rotate-0" />
          </Button>
          <Button
            color="primary"
            isIconOnly
            variant="solid"
            onPress={() => moveSelected("left")}
            isDisabled={selectedRight.length === 0}
            aria-label="Move selected to left"
          >
            <ChevronLeft className="h-4 w-4 rotate-90 md:rotate-0" />
          </Button>
          <Button
            color="primary"
            isIconOnly
            variant="solid"
            onPress={() => moveAll("left")}
            isDisabled={filteredRightItems.length === 0}
            aria-label="Move all to left"
          >
            <ChevronsLeft className="h-4 w-4 rotate-90 md:rotate-0" />
          </Button>
        </div>
        <Card className="flex-1 dark:bg-slate-950">
          <CardHeader className="flex justify-around">
            <h2 className="text-lg font-semibold">Selected Items</h2>
            <p>Selected: {filteredRightItems.length}</p>
          </CardHeader>
          <CardBody>
            <Input
              placeholder="Search selected items"
              value={rightSearch}
              onChange={(e) => setRightSearch(e.target.value)}
              startContent={<Search className="text-default-400" size={18} />}
              className="mb-4"
            />
            <ScrollShadow className="h-[300px]">
              {filteredRightItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item, "right")}
                  onDoubleClick={() => handleDoubleClick(item, "right")}
                  className={`p-2 cursor-pointer rounded-md transition-colors ${
                    selectedRight.includes(item)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-default-100"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </ScrollShadow>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}