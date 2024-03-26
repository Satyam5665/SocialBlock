import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";
import { useState, useEffect } from "react";
import Logo from "../images/Logo.png";
import Meta from "../images/meta.png";


function App() {

  const [currentAccount, setCurrentAccount] = useState('');
  const [correctNetwork, setCorrectNetwork] = useState(false);

  // // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId' })
      console.log('Connected to chain:' + chainId)

      //const rinkebyChainId = '0x4'


      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }

  // Checks if wallet is connected to the correct network
  const checkCorrectNetwork = async () => {
    const { ethereum } = window
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)

    const rinkebyChainId = '0x4'


    setCorrectNetwork(true)

  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    connectWallet();
    checkCorrectNetwork();
  });

  return (
    // BEM
    <div className="bg-gray-800 flex justify-center h-screen">
      {currentAccount === '' ? (
        <div className="flex bg-gray-900 w-2/3 justify-start items-center flex-col">
        {/* <Sidebar /> */}
          <div className="flex flex-col">
            <img src={Logo} className="avatar rounded-full mx-auto w-11/12 h-11/12" class="avatar" alt="My_Img"/>
          </div>
            <p className="p-3 text-slate-200 text-xl">Connect your Metamask wallet to socialblock here.</p>
            <button
              className='w-64 h-16 bg-sky-800 rounded-lg mb-10 mt-10 hover:scale-105 transition duration-500 ease-in-out'
              onClick={connectWallet}>
                <div className="flex justify-evenly items-center">
                  <img src={Meta} className="flex rounded-full w-10 h-10" alt="My_Img"/>
                  <p className="flex text-slate-200 text-xl">Connect Wallet</p>
                </div>
            </button>
      </div>
      ) : correctNetwork ? (
        <div className="flex app h-screen bg-gradient-to-t from-blue-200 to-sky-200 w-4/5"> 
          <Sidebar />
          <Feed />
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
          <div>----------------------------------------</div>
          <div>Please connect to the Rinkeby Testnet</div>
          <div>and reload the page</div>
          <div>----------------------------------------</div>
        </div>
      )}
    </div>

  );
}

export default App;
