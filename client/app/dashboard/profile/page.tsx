'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { checkUserExists } from '@/components/requestsHandler/requestsItems';
import Cards from '@/components/files/cards';
import CustomInput from '@/components/customInput/customInput';


const cards = [
    { title: "Total Trades", value: 3000 },
    { title: "Current Balance", value: 123355 },
    { title: "Pending Transactions", value: 3 },
]

const Dashboard = () => {
    const router = useRouter();
    const { disconnect, connected, publicKey } = useWallet();
    const [registered, setRegisterd] = useState<boolean | null>(null);
    const [user, setUserDetails] = useState<any | null>(null);


    useEffect(() => {
        if (!connected) {
            router.push('/');
        } else {
            //check if user has updated profile
            (async () => {
                if (!publicKey) return;
                const response = await checkUserExists(publicKey?.toBase58());
                console.log(response);
                if (response.data.status == "failed") {
                    setRegisterd(false);

                } else {
                    setRegisterd(true)
                }

            })()
        }
    }, [connected, publicKey]);


    return (
        <div className="bg-white border h-[100%] w-full text-black p-5">
            <div>
                <h2 className='font-bold text-[24px]'>Profile</h2>
            </div>
            <div className='p-2 border rounded-lg h-full'>
                {!registered ?
                    <div>
                        <div className='text-center py-3'>
                            <h2 className='font-bold text-center'>Please Complete your profile to continue</h2>
                            <p>You won't be able to trade without a complete profile</p>
                        </div>

                        <CustomInput
                            type='text'
                            placeholder='enter your first name'
                        />
                        <CustomInput
                            type='text'
                            placeholder='enter your last name'
                        />
                        <CustomInput
                            type='text'
                            placeholder='enter your email'
                        />
                        <CustomInput
                            type='country'
                            placeholder='enter your country'
                        />
                        <CustomInput
                            type='state'
                            placeholder='enter your state'
                        />

                        <div className='py-3 flex flex-row justify-center items-center'>

                            <button className='my-3 bg-black text-white p-3 w-6/12 m-auto rounded-lg'>
                                Update Profile
                            </button>
                        </div>

                    </div>
                    :
                    <>

                    </>


                }

            </div>

        </div>

    );
};

export default Dashboard;
