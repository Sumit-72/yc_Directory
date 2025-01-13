<<<<<<< HEAD
// import Link from 'next/link'
// import React from 'react'
// import Image from 'next/image'
// import { auth, signIn } from '@/auth';
// import { signOut } from '@/auth';
// import { BadgePlus, LogOut } from 'lucide-react';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from './ui/button';
    

// const Navbar = async() => {
//     const session = await auth();
    
//   return (
//     <div className='px-5 py-3 bg-gray-200 shadow-sm font-work-sans'>
//       <nav className='flex justify-between items-center'>
//         <Link href="/">
//             <Image src="/logo.png" alt="logo" width={144} height={1} />
//         </Link>

//         <div className='flex items-center gap-5 text-black'>
//             {session && session?.user ?(
//                 <>
//                 <Link href="/startup/create">
//                 <span className='max-sm:hidden border border-gray-400 shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-2 bg-black text-white-100' >Create</span>
//                 <BadgePlus className='size-6 sm:hidden' />
//                 </Link>

//                 <button onClick={async ()=>{

//                     await signOut({redirectTo: "/"});
//                 }}>
//                     <span className='max-sm:hidden border border-gray-400 shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-2 bg-black text-white-100' >Logout</span>
//                     <LogOut className='size-6 sm:hidden text-red-500' />
//                 </button>

//                 <Link href={`/user/${session?.user.id}`}>
//                 <Avatar className='size-10 border-2 border-black '>
//                     <AvatarImage src={session?.user?.image} alt='' />
//                     <AvatarFallback>AV</AvatarFallback>
//                 </Avatar>
//                 </Link>
//                 </>
//             ): (
//               <Button
//               onClick={async () => {
//                 await signIn("github");
//               }}
//               className="bg-black-200 text-white hover:bg-red-300 hover:text-black transition-all"
//             >
//               Login
//             </Button>
//             )}
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

=======
import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

>>>>>>> 3a0924e37ee73c045d2c0ae453ad1a63ed1d8134
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden border border-gray-400 shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-2 bg-black text-white-100">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden border border-gray-400 shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-2 bg-black text-white-100">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className='size-10 border-2 border-black '>
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit" className="bg-black-200 text-white hover:bg-red-300 hover:text-black transition-all w-50 rounded-lg p-2">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 3a0924e37ee73c045d2c0ae453ad1a63ed1d8134
