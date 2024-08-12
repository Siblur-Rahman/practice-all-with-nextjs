import React from 'react';

const getSingleData = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json();
    return data
}
const PostDetailsPage = async ({params}) => {
    const singleData = await getSingleData(params.id)
    return (
        <div className='h-screen'>
            <h2 className="text-3xl"><span className='bg-orange-300'>Title : </span>{singleData.title}</h2>
            <h2 className="text-xl">{singleData.body}</h2>
        </div>
    );
};

export default PostDetailsPage;