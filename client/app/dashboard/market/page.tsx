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
    const router = useRouter();
    const { disconnect, connected, publicKey } = useWallet();


    useEffect(() => {
        if (!connected) {
            router.push('/');
        } else {
            //check if user has updated profile
            (async () => {
                if (!publicKey) return;
                const response = await checkUserExists(publicKey?.toBase58());
                console.log(response);
                // if(response.data.available) {

                //     router.push('/update-profile');
                // }

            })()
        }
    }, [connected, publicKey]);


    return (
        <div className="bg-white border h-[100%] w-full text-black p-5">
            <div>
                <h2 className='font-bold text-[24px]'>Market</h2>
            </div>
            <div className='flex flex-row gap-x-3'>

                {/* {cards.map((item: any, index: number) => {
                    return (
                        <Cards title={item.title} value={item.value} />
                    )
                })} */}
            </div>

        </div>

    );
};

export default Dashboard;
