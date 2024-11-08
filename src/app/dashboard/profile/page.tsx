'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { checkUserExists, signUpUser } from '@/components/requestsHandler/requestsItems/index';
import Cards from '@/components/files/cards';
import CustomInput from '@/components/customInput/customInput';

const Dashboard = () => {
    const router = useRouter();
    const { disconnect, connected, publicKey } = useWallet();
    const [registered, setRegistered] = useState<boolean | null>(null);
    const [user, setUserDetails] = useState<any | null>(null);
    const [userInfo, setUserInfo] = useState({
        email: "",
        first_name: "",
        last_name: "",
        country: "",
        state: "",
    });
    const [updated, setUpdated] = useState(0);

    useEffect(() => {
        if (!connected) {
            router.push('/');
        } else {
            (async () => {
                if (!publicKey) return;
                const response = await checkUserExists(publicKey?.toBase58());
                console.log(response);
                if (response.data.status === "failed") {
                    setRegistered(false);
                } else {
                    setRegistered(true);
                    setUserDetails(response.data.user);
                }
            })();
        }
    }, [connected, publicKey, updated]);

    const registerUser = async () => {
        if (!publicKey) return;
        const response = await signUpUser(
            userInfo.last_name,
            userInfo.state,
            userInfo.country,
            userInfo.first_name,
            publicKey?.toString(),
            userInfo.email
        );
        if (response.data.status === "success") {
            alert("Registration Successful!!");
            setUpdated(Math.random());
        } else {
            alert("Registration failed, try again!");
            setUpdated(Math.random());
        }
    };

    return (
        <div className="bg-white border h-full w-full text-black p-5">
            <div>
                <h2 className="font-bold text-2xl">Profile</h2>
            </div>
            <div className="p-2 border rounded-lg h-full">
                {!registered ? (
                    <div>
                        <div className="text-center py-3">
                            <h2 className="font-bold">Please Complete Your Profile to Continue</h2>
                            <p>You won't be able to trade without a complete profile</p>
                        </div>

                        {["first_name", "last_name", "email", "country", "state"].map((field) => (
                            <CustomInput
                                key={field}
                                type="text"
                                placeholder={`Enter your ${field.replace("_", " ")}`}
                                onChange={(e) => setUserInfo({ ...userInfo, [field]: e.target.value })}
                            />
                        ))}

                        <div className="py-3 flex justify-center">
                            <button
                                onClick={registerUser}
                                className="my-3 bg-black text-white p-3 w-6/12 rounded-lg"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">

                            <div className="flex items-center justify-center mb-4">
                                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">

                                    {user?.first_name?.charAt(0)}{user?.last_name?.charAt(0)}
                                </div>
                            </div>


                            <div className="text-center">

                                <h2 className="text-xl font-semibold text-gray-800">
                                    {user?.first_name} {user?.last_name}
                                </h2>


                                <p className="text-gray-600 mt-2 text-sm">
                                    {user?.email}
                                </p>


                                <p className="text-gray-500 mt-1">
                                    {user?.state}, {user?.country}
                                </p>


                                <div className="mt-4 flex justify-center gap-4">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
                                        Edit Profile
                                    </button>
                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition">
                                        Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
