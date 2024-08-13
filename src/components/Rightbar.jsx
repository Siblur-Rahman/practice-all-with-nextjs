'use client'
import NextJSLeftbar from "@/app/(notes)/nextJS/NextJSLeftbar";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {Active, Accordion } from "@/app/shared/CommonJS";
import Link from "next/link";
import ToolsLeftbar from "@/app/(notes)/tools/ToolsLeftbar";


const Rightbar = () => {
    const pathName = usePathname()
    useEffect(() =>{
        Active();
        Accordion()
    })
    const links = [
        {
            title:"Next JS",
            path:"nextJS"
        }
    ]
    return (
        <div className='bg-slate-200 h-screen fixed w-[15%] top-10 right-0'>
            <div><Link href="/nextJS" className={`text-2xl px-2 bg-red-500 ${pathName === "/nextJS" && 'text-cyan-500'}`}>Next JS</Link></div>
        {pathName==='/nextJS' && <NextJSLeftbar/>}
            <div><Link href="/tools" className={`text-2xl px-2 bg-red-500 ${pathName === "/tools" && 'text-cyan-500'}`}>Tools</Link></div>
        {pathName==='/tools' && <ToolsLeftbar/>}
        {/* <nav className='bg-slate-200 h-screen fixed w-[15%] top-10 right-0'>
        {
                Links?.map(link=>
                <div key={link.title}>
                    <div className="text-red-500">{link.title}</div>
                   <ul className="flex-col">
                   {
                        link?.topic.map(topic=><li key={topic.title}><Link href={topic.path} className={`text-xl ${pathName === topic.path && 'text-cyan-500'}`}>{topic.title}</Link></li>)
                    }
                   </ul>
                </div>)
            }
        </nav> */}
        </div>

    );
};

export default Rightbar;