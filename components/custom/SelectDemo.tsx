import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Bug, Plane, PocketKnife } from "lucide-react";

export function SelectDemo({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const tagIcons: Record<string, React.JSX.Element> = {
    Fix: <PocketKnife className="mr-2 h-4 w-4" />,
    Deploy: <Plane className="mr-2 h-4 w-4" />,
    Bug: <Bug className="mr-2 h-4 w-4" />,
  };
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a tag" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tags</SelectLabel>
          <SelectItem value="Fix">
            <PocketKnife />
            Fix
          </SelectItem>
          <SelectItem value="Deploy">
            <Plane />
            Deploy
          </SelectItem>
          <SelectItem value="Bug">
            <Bug />
            Bug
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
