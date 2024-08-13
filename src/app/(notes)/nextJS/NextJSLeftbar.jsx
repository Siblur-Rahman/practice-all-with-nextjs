import { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import {Active, Accordion } from "@/app/shared/CommonJS";
const NextJSLeftbar = () => {
    const [getdata]=useGetData('nextJSLeftbar.json');
    useEffect(() =>{
        Active();
        Accordion()
    })
    return (
        
        <>

            {
                getdata.map(data=><div key={data.title}>
                    <div className="sidebarHeading">{data?.title}</div>
                    <ul className="flex-col px-2">
                    {
                        data.topic.map(topic=><li key={topic}><a  href={`#${topic}`} className="link">{topic}</a></li>)
                    }
                    </ul>
                </div>)
            }

        </>
    );
};

export default NextJSLeftbar;