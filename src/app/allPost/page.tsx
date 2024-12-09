'use client'
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { blogPosts } from './data';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"



const page = () => {



    const router = useRouter();

    return (
        <div className='w-full h-full flex flex-row flex-wrap items-start justify-center gap-5 p-4'>
            {
                blogPosts.map((post, index) => (
                    <div key={index} onClick={() => router.push(`/post/${post.id}`)} className='max-w-72 my-2 md:my-5 group cursor-pointer rounded-lg'>
                        <div className='w-full'>
                            <img src={post.image ? "" : "/blogImg.png"} alt="Blog Image" className='w-full object-cover rounded-t-lg' />
                        </div>

                        <div className='text-gray-200 flex flex-col gap-1 md:gap-3 mt-2 text-sm md:text-base'>
                            <p className='text-[#6941C6] text-sm'>{post.author} | {post.date}</p>
                            <h2 className='text-xl md:text-2xl group-hover:underline'>{post.title} &#8599;</h2>
                            <p className='text-gray-400'>{post.excerpt}</p>
                            <div className={`w-full flex flex-row flex-wrap gap-2`}>
                                {
                                    post.tags.map((tag, index) => (
                                        <div key={index}
                                            className={`px-2 rounded-full 
                                                ${index % 5 === 0 ? "bg-[#E3F2FD] text-[#1E88E5]"
                                                    : index % 5 === 1 ? "bg-[#FFEBEE] text-[#E53935]"
                                                        : index % 5 === 2 ? "bg-[#E8F5E9] text-[#43A047]"
                                                            : index % 5 === 3 ? "bg-[#FFF3E0] text-[#FB8C00]"
                                                                : index % 5 === 4 ? "bg-[#F3E5F5] text-[#8E24AA]"
                                                                    : null
                                                } text-xs md:text-sm`}
                                        >{tag}</div>
                                    ))
                                }
                            </div>


                        </div>
                    </div>
                ))
            }

            <Pagination className='text-gray-200'>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </div>
    )
}

export default page
