'use client';


import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { checkUserExists } from '@/components/requestsHandler/requestsItems';

export default function SideBar() {
    const router = useRouter();
    const { disconnect, connected, publicKey } = useWallet();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyUserConnection = async () => {
            if (connected && publicKey) {
                const response = await checkUserExists(publicKey.toBase58());
                // Uncomment to redirect to profile update page if necessary
                // if (response.data.available) {
                //     router.push('/update-profile');
                // }
            } else if (!connected) {
                router.push('/');
            }
            setIsLoading(false);
        };

        verifyUserConnection();
    }, [connected, publicKey, router]);

    const handleLogout = async () => {
        const confirmed = confirm("Are you sure you want to logout?");
        if (!confirmed) return;

        localStorage.clear();
        sessionStorage.clear();
        await disconnect();

        setTimeout(() => {
            router.push('/');
        }, 100);
    };

    const handleNavigation = (where: string) => {
        router.push(where);
    };

    if (isLoading) return null;  // Prevent rendering sidebar until loading is complete

    return (
        <div className="h-full w-full inset-y-0 left-0 w-64 bg-white text-black shadow-lg transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between h-16 px-4 bg-green-600 text-white">
                <h1 className="text-xl font-bold">EcoTrade</h1>
            </div>
            <nav className="mt-5">
                <ul>
                    <li onClick={() => handleNavigation('/dashboard')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Dashboard</li>
                    <li onClick={() => handleNavigation('/dashboard/profile')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Profile</li>
                    <li onClick={() => handleNavigation('/dashboard/market')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Market</li>
                    <li onClick={() => handleNavigation('/dashboard/transactions')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Transactions</li>
                    <li onClick={() => handleNavigation('/dashboard/settings')} className="py-2 px-4 hover:bg-green-100 cursor-pointer">Settings</li>
                    <li className="py-2 px-4 hover:bg-green-100 cursor-pointer" onClick={handleLogout}>Logout</li>
                </ul>
            </nav>
        </div>
    );
};
