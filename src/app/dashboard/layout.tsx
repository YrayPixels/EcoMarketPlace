"use client"
import SideBar from "@/components/files/sidebar";

import { checkUserExists } from "@/components/requestsHandler/requestsItems";
import { useWallet } from "@solana/wallet-adapter-react";
import { connect } from "http2";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter();
  const { disconnect, connect, connected, publicKey } = useWallet();

  useEffect(() => {
    if (!connected) {
      connect()
      // location.href = "/"
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
      <div className="col-span-1 pt-[70px]">
        <SideBar />
      </div>
      <main className="min-h-screen pt-[70px] col-span-3">
        {children}
      </main>
    </div>

  );
}
