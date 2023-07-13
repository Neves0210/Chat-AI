import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center overflow-hidden">
      <Card className="w-[540px] h-[600px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader> 
          <CardTitle> Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a Chatbot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>GN</AvatarFallback>
              <AvatarImage src="https://github.com/Neves0210.png"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Humano</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero iusto vitae fugit accusamus obcaecati dicta, architecto consectetur aut, esse explicabo! Nostrum, neque quisquam cumque inventore ex praesentium ratione incidunt!
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
          <Avatar>
              <AvatarFallback>AI</AvatarFallback>
              <AvatarImage src=""/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Inteligencia</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero iusto vitae fugit accusamus obcaecati dicta, architecto consectetur aut, esse explicabo! Nostrum, neque quisquam cumque inventore ex praesentium ratione incidunt!
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder=" How can I Help You?"/>
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}