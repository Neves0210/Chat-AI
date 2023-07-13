import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex itens min-h-screnn bg-slate-50 center justify-center">
      <Card className="w-[440px] h-[700px]">
        <CardHeader> 
          <CardTitle> Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a Chatbot.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Mensagem</p>
        </CardContent>
        <CardFooter>
          form
        </CardFooter>
      </Card>
    </div>
  )
}