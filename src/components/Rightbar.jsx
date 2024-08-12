'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Rightbar = () => {
    const pathName = usePathname()
    const Links =[
        {
            title:"Routing",
            topic:['Linking and Navigating']
        },
        {
            title:"components",
            topic:['image', '']
        }
    ]
    return (
        <div className=''>     
        <nav className='bg-slate-200 h-screen fixed w-[15%] top-10 right-0'>
        {
                Links?.map(link=>
                <div key={link.title}>
                    <div className="text-red-500">{link.title}</div>
                   <ul className="flex-col">
                   {
                        link?.topic.map(topic=><li key={topic}><Link href={topic}>{topic}</Link></li>)
                    }
                   </ul>
                </div>)
            }
        </nav>
        </div>

    );
};

export default Rightbar;