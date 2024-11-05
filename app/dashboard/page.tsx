'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';

import Market from '../market/page';
import Navbar from '../navbar/page';
import { WalletProviderContext } from '../WalletProviderContext/page';
const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeContent, setActiveContent] = useState('dashboard');
    const router = useRouter();
    const { disconnect, connected } = useWallet();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        if (!connected) {
            router.push('/');
        }
    }, [connected]);

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





    // Content components
    const renderContent = () => {
        switch (activeContent) {
            case 'dashboard':
                return (
                    <div>
                        <Navbar />
                        <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
                        {/* Dashboard content */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="font-semibold text-lg">Total Trades</h3>
                                <p className="text-2xl">1,234</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="font-semibold text-lg">Current Balance</h3>
                                <p className="text-2xl">$12,345.67</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="font-semibold text-lg">Pending Transactions</h3>
                                <p className="text-2xl">3</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg col-span-1 sm:col-span-2 lg:col-span-3">
                            <h3 className="font-semibold text-lg">Recent Activity</h3>
                            <ul>
                                <li className="py-2 border-b">Trade #1234 completed</li>
                                <li className="py-2 border-b">Trade #1235 pending</li>
                                <li className="py-2 border-b">Deposit of $500 made</li>
                            </ul>
                        </div>
                    </div>
                );
            case 'profile':
                return <h2 className="text-2xl font-bold mb-6">Profile</h2>;
            case 'market':
                return <Market />;
            case 'transactions':
                return <h2 className="text-2xl font-bold mb-6">Transactions</h2>;
            case 'settings':
                return <h2 className="text-2xl font-bold mb-6">Settings</h2>;
            default:
                return null;
        }
    };

    return (
        <WalletProviderContext>
            <div className="flex  bg-gray-50">
                {/* Sidebar */}
                <aside className={`fixed mt-[76px] inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                    <div className="flex items-center justify-between h-16 px-4 bg-green-600 text-white">
                        <h1 className="text-xl font-bold">EcoTrade</h1>
                        <button onClick={toggleSidebar} aria-label="Toggle sidebar" className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <nav className="mt-5">
                        <ul>
                            <li className="py-2 px-4 hover:bg-green-100 cursor-pointer" onClick={() => setActiveContent('dashboard')}>Dashboard</li>
                            <li className="py-2 px-4 hover:bg-green-100 cursor-pointer" onClick={() => setActiveContent('profile')}>Profile</li>
                            <li className="py-2 px-4 hover:bg-green-100 cursor-pointer" onClick={() => setActiveContent('market')}>Market</li>
                            <li className="py-2 px-4 hover:bg-green-100 cursor-pointer" onClick={() => setActiveContent('transactions')}>Transactions</li>
                            <li className="py-2 px-4 hover:bg-green-100 cursor-pointer" onClick={() => setActiveContent('settings')}>Settings</li>
                            <li className="py-2 px-4 hover:bg-green-100 cursor-pointer" onClick={handleLogout}>Logout</li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className={`flex flex-col flex-1 md:ml-64`}>
                    <header className="flex items-center justify-between h-16 px-4 bg-white shadow">
                        <button onClick={toggleSidebar} aria-label="Toggle sidebar" className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        <h1 className="text-xl font-semibold">{activeContent.charAt(0).toUpperCase() + activeContent.slice(1)}</h1>
                    </header>

                    <main className="flex-1 p-6">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </WalletProviderContext>
    );
};

export default Dashboard;
