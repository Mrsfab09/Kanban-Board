import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    // Test comment
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type your message here."
      style={{ height: "100px" }}
    />
  );
}
