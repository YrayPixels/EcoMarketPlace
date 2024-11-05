'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { checkUserExists } from '@/components/requestsHandler/requestsItems';
export default function SideBar() {
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

    const handleLogout = async () => {
        try {
            const confirmed = confirm("Are you sure you want to logout?");
            if (!confirmed) return;


            localStorage.removeItem('token');
            localStorage.clear();
            sessionStorage.clear();


            await disconnect();


            setTimeout(() => {
                router.push('/');
            }, 100);
        } catch (error) {
            console.error("Logout failed:", error);
        }

    };


    const handleNavigation = (where: string) => {
        router.push(where);
    }

    return (
        <div className={`h-full w-full inset-y-0 left-0 w-64 bg-white text-black shadow-lg transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center justify-between h-16 px-4 bg-green-600 text-white">
                <h1 className="text-xl font-bold">EcoTrade</h1>
                <button aria-label="Toggle sidebar" className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <nav className="mt-5">
                <ul>
                    <li onClick={() => handleNavigation('/dashboard')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Dashboard</li>
                    <li onClick={() => handleNavigation('/dashboard/profile')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Profile</li>
                    <li onClick={() => handleNavigation('/dashboard/market')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Market</li>
                    <li onClick={() => handleNavigation('/dashboard/transactions')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Transactions</li>
                    <li onClick={() => handleNavigation('/dashboard/settings')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Settings</li>
                    <li className="py-2 px-4 hover:bg-green-100 cursor-pointer" onClick={() => handleLogout()}>Logout</li>
                </ul>
            </nav>
        </div >

    );
};

