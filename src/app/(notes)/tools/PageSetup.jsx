import Blog from "../../Shared/Blog";
const PageSetup = () => {
    return (
        <>
        <Blog
        topic={'Page setUp'}
        code={
`
import { useContext, useEffect } from "react";
import { ToolsForCode } from "../../CodeProvider";
import Active, { Accordion } from "../../components/CommonJS/CommonJS";
import ToolsLeftbar from "./ToolsLeftbar";

const FileName = () => {
    const {curlyBraceOpen, curlyBraceClosed, greaterThan,
        lessThan} = useContext(ToolsForCode)
        useEffect(() =>{
            Active();
            Accordion();
        })
    return (
        <>
        <div className="leftBar">
            <ToolsLeftbar/>
        </div>    
        <div className="content">
            <ArrowFunction/>
        </div>    
        </>
    );
};

export default FileName;
`
        }
        />
        <Blog
        topic={'Leftbar'}
        code={
`
import { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import { Active } from "../../components/CommonJS/CommonJS";


const ReactLeftbar = () => {
const [getdata]=useGetData('reactLeftbar.json');
useEffect(() =>{
Active();
// Accordion();
})
return (

<>
{
    getdata.map(data=><div key={data.title}>
        <div className="heading">{data.title}</div>
        {
            data.topic.map(topic=><a key={topic} 
                href={'#doller{topic}'} 
                className="link">{topic}</a>)
        }
    </div>)
}
</>
);
};

export default ReactLeftbar;
`
        }
        />
        </>
    );
};

export default PageSetup;