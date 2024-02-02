import React from 'react';
import Ethereum from "../Images/defif/ethereum.png"
import Polygon from "../Images/defif/Polygon-Matic.png"
import Polkadot from "../Images/defif/Polkadot.png"
import Avalanche from "../Images/defif/avalanche.png"
import NEAR from "../Images/defif/Near-Protocol.png"
import Cosmos from "../Images/defif/Cosmos-SDK.png"
import Solana from "../Images/defif/solana.png"
import Stellar from "../Images/defif/Stellar-core.svg"
import Binance from "../Images/defif/Binance.png"
// import "../Style/Dapps.css"

function AllBlockchains() {
  return (
    <div id='blockchains' className="dappssixthsec bg-transparent">
      <h2> Blockchains </h2>
      <div className="dappssixthsec-row text-[#4cc9f0]">
        <div className="dappssixthsec-box">
          <img src={Ethereum} alt="" />
          <h3>Ethereum</h3>
          <p>An open-source, decentralized public platform with smart contract functionality.</p>
        </div>
        <div className="dappssixthsec-box">
          <img src={Polygon} alt="" />
          <h3>Polygon Matic</h3>
          <p>Polygon (MATIC) is an Ethereum token that boosts the Polygon Network.</p>
        </div>
        <div className="dappssixthsec-box">
          <img src={Polkadot} alt="" />
          <h3>Polkadot</h3>
          <p>Polkadot is a next-generation blockchain protocol to regulate interoperable dApps.</p>
        </div>
      </div>
      <div className="dappssixthsec-row">
        <div className="dappssixthsec-box">
          <img src={Avalanche} alt="" />
          <h3>Avalanche</h3>
          <p>Avalanche is a robust dApp development platform that uses the Golang programming language.</p>
        </div>
        <div className="dappssixthsec-box">
          <img src={NEAR} alt="" />
          <h3>NEAR</h3>
          <p>NEAR is a layer-1 blockchain based on the PoS consensus algorithm.</p>
        </div>
        <div className="dappssixthsec-box">
          <img src={Cosmos} alt="" />
          <h3>Cosmos</h3>
          <p>Cosmos is a decentralized network of multiple blockchains driven by BFT consensus.</p>
        </div>
      </div>
      <div className="dappssixthsec-row">
        <div className="dappssixthsec-box">
          <img src={Solana} alt="" />
          <h3>Solana</h3>
          <p>Solana is a public blockchain network that achieves consensus with PoS and PoH.</p>
        </div>
        <div className="dappssixthsec-box">
          <img src={Stellar} alt="" />
          <h3>Stellar</h3>
          <p>An open platform to build decentralized financial products</p>
        </div>
        <div className="dappssixthsec-box">
          <img src={Binance} alt="" />
          <h3>Binance</h3>
          <p>Binance is a decentralized network based on BFT and Delegated PoS consensus.</p>
        </div>
      </div>
    </div>
  );
}

export default AllBlockchains;
