"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type Car ={
  id:string;
  brand:string;
  model:string;
  price_per_day:number;
  available:boolean;
}
export default function Page() {
  const[cars,setCars]= useState<Car[]>([]);
  const [loading,setLoading]= useState(false);
  return (

    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      Cars page
      {cars.map((car)=>{
        return <Card key={car.id}>
          <CardHeader>
            <CardTitle>{car.brand} {car.model}</CardTitle>
  

          </CardHeader>
          <CardContent className="space-y-2">
            <p>${car.price_per_day} per day</p>
            <p className={car.available?"text-green-600":"text-red-600"}>
              {car.available?"Available":"Not Available"}
            </p>

          </CardContent>
         

        </Card>
      })}
    </div>
  )
}
