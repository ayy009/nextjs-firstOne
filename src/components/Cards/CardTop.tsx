import { Card, Progress } from "@nextui-org/react";
import { Target } from "lucide-react";

export default function CardTop({ data, index }: any) {
  
  return (
    <Card
      className="w-11/12  p-4 bg-white dark:bg-gray-dark"
      shadow="sm"
      key={index}
    >
      <div className="flex items-start justify-between mb-4 mr-2">
        <div className="p-2 bg-gray-dark dark:bg-slate-900 rounded-lg">
          <Target className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg font-medium mb-1">{data.project_name}</h3>
      </div>

      <div className="text-slate-950 dark:text-white mb-2">
        {/* <h3 className="text-lg font-medium mb-1">{data.project_name}</h3> */}
        <div className="flex justify-between">
          <p className="text-sm text-success-500">Active</p>
          <p className="text-sm text-danger-400">In Active</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-success-500">{data.active_count}</span>
        <span className="text-sm text-danger-400">{data.inactive_count}</span>
      </div>

      <Progress
        aria-label="Progress"
        value={(data.active_count / (data.active_count + data.inactive_count)) * 100}
        className="max-w-full"
        color="success"
        size="sm"
      />
    </Card>
  );
}
