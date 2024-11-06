import {Switch} from "@nextui-org/react";
// import {MoonIcon} from "./MoonIcon";
// import {SunIcon} from "./SunIcon";

import { CircleCheckBig } from 'lucide-react';
import { CircleX } from 'lucide-react';

export default function SwitchSelect({selectSwitch,setselectSwitch}:any) {
  return (
    <Switch
      defaultSelected
      onChange={(e)=>{setselectSwitch(!selectSwitch);console.log(!selectSwitch)}}
      className=""
      size="md"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <CircleCheckBig className={className} />
        ) : (
          <CircleX className={className} />
        )
      }
    >
      select
    </Switch>
  );
}