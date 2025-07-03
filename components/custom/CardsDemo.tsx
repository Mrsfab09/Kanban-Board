import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderCheck, ClipboardCheck, CalendarCheck,CircleCheck } from 'lucide-react';

export function CardsDemo({ content }: { content: React.ReactNode }){
    const data = [
        {
            icon: <FolderCheck size={19}/>,
            title: "To Do",
            description: "Lorem ipsum lorem ipsum "
        },
           {
            icon: <ClipboardCheck size={19}/>,
            title: "In progress",
            description: "Lorem ipsum lorem ipsum "
        },
           {
            icon: <CircleCheck  size={19} color="oklch(0.696 0.17 162.48)"/>,
            title: "Done",
            description: "Lorem ipsum lorem ipsum "
        },
    ]
    return (
        <>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {data.map((item) => (
                    <Card key={item.title} className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    {item.title}
                                </div>
                               </CardTitle>
                                <CardAction>
                                    <Button variant="link">Sign Up</Button>
                                 </CardAction>
                        </CardHeader>
                        <CardContent>
                            {content}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}