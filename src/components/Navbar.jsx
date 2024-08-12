'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const navLinks =[
        {
            title:"HOME",
            path:'/'
        },
        {
            title:"Services",
            path:"/services"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"All Items",
            path:"/allitems"
        },
        {
            title:"",
            path:"/"
        }
    ]
    const navigateLogin = ()=>{
        router.push('/login')
    }
    return (
        <nav className='bg-red-500 flex justify-between items-center fixed w-full h-10 px-3 z-10'>
          <h6 className="text-4xl text-zinc-50">Next JS</h6>
          <ul className='flex justify-between items-center space-x-4'>
            {
                navLinks.map(link=><Link key={link.path} className={`text-3xl ${pathName === link.path && 'text-cyan-500'}`} href={link.path}>{link.title}</Link>)
            }
          </ul>
          <button onClick={navigateLogin} className="bg-white">Login</button>
        </nav>
    );
};

export default Navbar;