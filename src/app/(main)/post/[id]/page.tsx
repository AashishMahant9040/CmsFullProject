'use client'
import { usePathname } from 'next/navigation'
import React, { SetStateAction, useEffect, useState } from 'react'
import { blogPosts } from '@/app/(main)/allPost/data'

const page = () => {

    interface Post {
        id: number;
        title: string;
        image: string;
        author: string;
        date: string;
        excerpt: string;
        content: string;
        tags: string[];
    }

    const [post, setPost] = useState<Post | undefined>(undefined);
    const pathname = usePathname();


    useEffect(() => {
        const pathArr = pathname.split('/');
        const id = pathArr[pathArr.length - 1];
        const postArr = blogPosts.filter((post) => post.id.toString() == id.toString());
        setPost(postArr[0]);
    }, [pathname]);


    return (
        <div className='max-w-[800px] mx-auto text-gray-200 p-8 flex flex-col gap-5'>
            <h1 className='text-5xl my-4 font-bold'>{post?.title}</h1>
            <p>{post?.excerpt}</p>
            <img src={post?.image ? post.image : "/blogImg.png"} className='w-full object-contain' />
            <p>{post?.content}</p>
            <div className='w-full flex flex-row justify-end gap-2'>
                <p>Author : {post?.author}</p> |
                <p>Date : {post?.date}</p>
            </div>
        </div>
    )
}

export default page