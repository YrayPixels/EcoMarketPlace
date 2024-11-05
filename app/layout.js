// app/layout.tsx or wherever your layout file is located
import '../public/css/animate.min.css';
import '../public/css/jquery-ui.css';
import '../public/css/responsive.css';
import '../public/css/normalize.css';
import '../app/globals.css';
import Footer from './footer/page';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

// Define wallets to be used
const wallets = [new PhantomWalletAdapter()];

// Modify the layout to include providers
const Layout = ({ children }) => {
  return (
    <ConnectionProvider endpoint="https://api.mainnet-beta.solana.com">
      <WalletProvider wallets={wallets} autoConnect>
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Layout;
