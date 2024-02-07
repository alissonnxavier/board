'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const number = 12345;
  const redirect = ()=>{
    router.push(`/users/${number}`);
  }

  return (
    <div>
      <Button 
      onClick={()=>redirect()}
      variant='destructive'
      >
        Click me!
      </Button>
    </div>
  );
}
