import React from 'react'
import DeliveryBase from '../DeliveryBase'

const data = [
  { value: "C_SF52244", label: "PV494" },
  { value: "C_SF52550", label: "PV154" },
  { value: "C_SF52551", label: "PV154" },
  { value: "C_SF53954", label: "PV37" },
  { value: "C_SF54829", label: "PV37" },
  { value: "C_SF54834", label: "PV37" },
  { value: "C_SF54837", label: "PV37" },
  { value: "C_SF55060", label: "PV37" },
  { value: "C_SF56001", label: "PV101" },
  { value: "C_SF56005", label: "PV101" },
  { value: "C_SF57010", label: "PV120" },
  { value: "C_SF58022", label: "PV89" },
  { value: "C_SF58024", label: "PV89" },
  { value: "C_SF59001", label: "PV250" },
  { value: "C_SF60002", label: "PV300" },
  { value: "C_SF61003", label: "PV400" },
  { value: "C_SF62004", label: "PV500" },
  { value: "C_SF63005", label: "PV600" },
  { value: "C_SF64006", label: "PV700" },
  { value: "C_SF65007", label: "PV800" }
];


function DeliveryServerInterfaces() {
  return (
    <div>
         <DeliveryBase data = {data}/>
    </div>
  )
}

export default DeliveryServerInterfaces