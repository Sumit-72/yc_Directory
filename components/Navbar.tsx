import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth, signIn } from '@/auth';
import { signOut } from '@/auth';
import { BadgePlus, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';
    

const Navbar = async() => {
    const session = await auth();
    
  return (
    <div className='px-5 py-3 bg-gray-200 shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={1} />
        </Link>

        <div className='flex items-center gap-5 text-black'>
            {session && session?.user ?(
                <>
                <Link href="/startup/create">
                <span className='max-sm:hidden border border-gray-400 shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-2 bg-black text-white-100' >Create</span>
                <BadgePlus className='size-6 sm:hidden' />
                </Link>

                <button onClick={async ()=>{
                    "use server"

                    await signOut({redirectTo: "/"});
                }}>
                    <span className='max-sm:hidden border border-gray-400 shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-2 bg-black text-white-100' >Logout</span>
                    <LogOut className='size-6 sm:hidden text-red-500' />
                </button>

                <Link href={`/user/${session?.user.id}`}>
                <Avatar className='size-10 border-2 border-black '>
                    <AvatarImage src={session?.user?.image} alt='' />
                    <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                </Link>
                </>
            ): (
              <Button
              onClick={async () => {
                "use server";
                await signIn("github", { redirectTo: "/" });
              }}
              className="bg-black-200 text-white hover:bg-red-300 hover:text-black transition-all"
            >
              Login
            </Button>
            )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
