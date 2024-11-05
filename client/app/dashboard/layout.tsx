"use client"
import SideBar from "@/components/files/sidebar";

import { checkUserExists } from "@/components/requestsHandler/requestsItems";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter();
  const { disconnect, connected, publicKey } = useWallet();

  useEffect(() => {
    if (!connected) {
      location.href = "/"
    } else {
      //check if user has updated profile
      (async () => {
        if (!publicKey) return;
        const response = await checkUserExists(publicKey?.toBase58());

        if (!response) {

          location.href = ('profile');
        }

      })()
    }
  }, [connected, publicKey]);


  return (
    <div className="h-fit grid grid-cols-4">
      <div className="col-span-1">
        <SideBar />
      </div>
      <main className="min-h-screen col-span-3">
        {children}
      </main>
    </div>

  );
}
