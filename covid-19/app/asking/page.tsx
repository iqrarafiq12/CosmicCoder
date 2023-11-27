'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Asking() {
    const router = useRouter()
    return (
        <div className="min-h-screen flex flex-col justify-between items-center mx-auto py-10 max-w-7xl px-5 gap-20 ">
            <div className="flex flex-col items-center justify-center gap-20">
                <h1>Do you have an fever above 101.4?</h1>
                <Image className="w-60 h-60" src="/fever.png" width={1000} height={1000} alt="fever" />
            </div>
            <div className="flex flex-col gap-5 ">
                <Button onClick={() => router.push('/about')} className="bg-blue-600 hover:bg-blue-800 flex items-center justify-center mx-auto w-full h-full transition-all px-20">Yes, I do</Button>
                <Button onClick={() => router.push('/about')} className="bg-blue-600 hover:bg-blue-800 flex items-center justify-center mx-auto w-full h-full transition-all px-20">No, I don't</Button>
            </div>
        </div>

    )
}