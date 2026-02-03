"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { apiFetch } from "@/lib/api";

import { useState } from "react"

export default function Page() {
  const [loading ,setLoadig] = useState(false);
  const [form, setForm] = useState({
    email:"",
    password:""
  })

  async function HandleSubmit() {
    try{
      setLoadig(true);
      await apiFetch("/auth/login",{
        method:"POST",
        body:JSON.stringify(form)
      })
      alert("Login successful")
    }catch(err){
      alert("Error logging in")
    }finally{
      setLoadig(false)
    }
    
  }
  return <div className="flex min-h-screen items-center justify-center bg-muted">
   <Card className="w-full max-w-md">
    <CardHeader>
          <CardTitle>Login</CardTitle>


    </CardHeader>
    
   <CardContent className="space-y-4">


  
    <div className="space-y-2">
      <Label>Email</Label>
      <Input placeholder="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>

    </div>

    <div className="space-y-2">
      <Label>Password</Label>
      <Input placeholder="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>

    </div>
   </CardContent>
   <CardFooter>

    <Button onClick={HandleSubmit} disabled={loading} className="w-full">{loading?"Logging in...":"Login"}</Button>
   </CardFooter>

   </Card>
  </div>
}
