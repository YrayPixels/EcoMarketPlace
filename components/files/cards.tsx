'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function Cards(props: any) {
    const { title, value, index } = props;

    const router = useRouter();

    return (
        <div key={index} className="text-black shadow-lg p-2 w-full rounded-lg flex flex-col items-center justify-center" >
            <h2 className='text-[20px] font-bold'>{title}</h2>
            <p className='text-[18px]'>${Number(value).toFixed(2)}</p>
        </div >

    )
};

