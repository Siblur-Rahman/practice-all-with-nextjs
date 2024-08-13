import Blog from '@/app/shared/Blog';
import React from 'react';

const ImageComponent = () => {
    return (
        <div className='topic-border'>
                <Blog
            id={'Image'}
            docs={'https://nextjs.org/docs/pages/api-reference/components/image'}
            code={`
import Image from 'next/image'

const  Page = () => {
return (
<Image
src="Shibli"
width={500}
height={500}
alt="Picture of the author"
    />
  )
}
  export default Page
                `}
            />
            <Blog
            fileName={'.jsx'}
            topic={'how-to-allow-all-domains'}
            url={'https://stackoverflow.com/questions/71235874/how-to-allow-all-domains-for-image-nextjs-config'}
            time={'77-5 27:30 PAN-Meals.jsx'}
            code={`
import Image from 'next/image';
import { Image } from 'next/image';
import { Shibli } from '@/public/image/Shibli.jpg';

<Image src={meal.strMealThumb} alt={meal.strMeal} width={500} height={500}/>
                
                `}
            />
            <Blog
            fileName={'next.config.mjs'}
            code={`
const nextConfig = {
    images: {
    remotePatterns: [
    {
    protocol: "https", // or http
    hostname: "**", //all api
    },
    ],
    },
};

export default nextConfig;

                
                `}
            />
        <Blog
        topic={'If Import Image No need width & hight'}
        code={`
import Shibli from "@/../public/images/Shibli.jpg"
<Image src="Shibli" t="Picture" />
            `}
        />
        </div>
    );
};

export default ImageComponent;