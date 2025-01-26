import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
        <nav className=" max-w-7xl mx-auto py-6 flex justify-between items-center">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/assets/Logo.png" alt="Comet" width={20} height={20} />
                    <h1 className="text-2xl font-bold">Comet Currency</h1>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 ">  
                <Link href="/">
                   <Image src="/assets/Instagram.png" alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="/" className="hidden md:block">
                    <Image src="/assets/X.png" alt="Twitter" width={24} height={24} />
                </Link>
                <Link href="/" className="hidden md:block">
                    <Image src="/assets/Linkedin.svg" alt="Linkedin" width={24} height={24} />
                </Link>
                <Link href="/" className="hidden md:block"> 
                    <Image src="/assets/Whatsapp.png" alt="Whatsapp" width={24} height={24} />
                </Link>
             
            </div>
        </nav>
    </>
  )
}
