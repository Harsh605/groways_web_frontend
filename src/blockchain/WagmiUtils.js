import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import { useConnectModal, connectorsForWallets, darkTheme, RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {mainnet,sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { metaMaskWallet,walletConnectWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";
import './polyfills';


const { chains, publicClient,webSocketProvider } = configureChains(
    [sepolia],
    [
        alchemyProvider({ apiKey: "5JOLBM2ur8GdBO2a9lftNFppgUb6rRPa" }),
        publicProvider()
    ]
);

const connectors = connectorsForWallets([
    {
        groupName: "Popular",
        wallets: [
            metaMaskWallet({ projectId: "a93f9add038570d27b92e60d1a42951b", chains }),
            // walletConnectWallet({projectId: "abc",chains}),
            // trustWallet({projectId: "abc",chains})
        ],
    },
]);
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketProvider
})

const WagmiUtils = ({comp}) => {

    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider
                    theme={darkTheme({
                        accentColor: "#394bf2",
                        accentColorForeground: "white",
                        borderRadius: "medium",
                        fontStack: "rounded",
                        overlayBlur: "small",
                    })}
                    chains={chains}
                >
                    {comp}
                </RainbowKitProvider>
            </WagmiConfig>

        </>
    )
}

export default WagmiUtils