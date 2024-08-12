'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
const DataFetchinglinks = () => {
    const pathName = usePathname()
    const Links =[
        {
            title:"Data Fetching",
            path:'/getDataFetching'
        },
        {
            title:"With Search",
            path:'/withSearch'
        },
    ]
    return (
 <>
 <h2>Data Fetching</h2>
          {
              Links.map(link=><li key={link.path}><Link className={`text-xl ${pathName === link.path && 'text-cyan-500'}`} href={link.path}>{link.title}</Link></li>)
          }
</>
    );
};

export default DataFetchinglinks;