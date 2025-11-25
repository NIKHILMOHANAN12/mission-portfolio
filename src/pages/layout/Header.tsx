import Navbar from '@/components/Navbar'
import OpenToWorkTag from '@/components/Opentowork'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isDark = pathname === "/about";
  
  return (
    <div className='flex items-center justify-between px-6'>
      <div>
        <Link href="/">
          <Image src={isDark ? "/Logos/Brand Logo-White.svg" : "/Logos/Brand Logo-Black.svg"} alt="Portfolio Logo" width={40} height={40} className='fixed top-4 left-6 z-50 h-8 w-auto'/>
        </Link>
      </div>
      
      <div>
        <Navbar />
      </div>
      <div>
        <OpenToWorkTag/>
      </div>
    </div>
  )
}

export default Header