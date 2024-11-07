'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { checkUserExists } from '@/components/requestsHandler/requestsItems';
import Cards from '@/components/files/cards';


const cards = [
    { title: "Total Trades", value: 3000 },
    { title: "Current Balance", value: 123355 },
    { title: "Pending Transactions", value: 3 },
]

const Dashboard = () => {



    return (
        <div className="bg-white border h-[100%] w-full text-black p-5">
            <div>
                <h2 className='font-bold text-[24px]'>Dashboard</h2>
            </div>
            <div className='flex flex-row gap-x-3'>
                {cards.map((item: any, index: number) => {
                    return (
                        <Cards index={index} title={item.title} value={item.value} />
                    )
                })}
            </div>

        </div>

    );
};

export default Dashboard;
