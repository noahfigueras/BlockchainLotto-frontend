import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

import Lottery from '../artifacts/Lottery.json';

//localhost
const lotteryAddress = '';

//Move this to context
const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(lotteryAddress, Lottery.abi, provider);

//Show Metamask for users
async function requestAccount() {
    try{
        await window.ethereum.request({method: 'eth_requestAccounts'});
    } catch(err) {
        console.log('error');
        console.error(error);

        alert('Login to Metamask first');
    }
}

function App() {
    
    async function getLotteryPrice() {
        if(typeof window.ethereum !== 'undefined'){
            try{
                const data = await contract.price();
                console.log('Data: ', data);
            } catch(err) {
                console.log('Error: ', err);
            }    
        }
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Join the Blockchain Lottery and win millions every week.
        </p>
        <button
        className="join_lottery" onClick={() => alert("Suck it bitch!")}
        >
          Enter Lottery
        </button>
      </header>
    </div>
  );
}

export default App;
