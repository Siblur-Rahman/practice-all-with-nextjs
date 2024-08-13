import Blog from '@/app/shared/Blog';
import React from 'react';

const Metadata = () => {
    return (
        <div className='topic-border'>
            <Blog
            id={'Metadata'}
            docs={'https://nextjs.org/docs/app/building-your-application/optimizing/metadata'}
            />
        </div>
    );
};

export default Metadata;