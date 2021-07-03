import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

import Lottery from './artifacts/Lottery.json';

//Kovan Network
const lotteryAddress = '0x49c21F64501ffEF20eEeA30b40387F8A3F81a64C';

//Move this to context
const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(lotteryAddress, Lottery.abi, provider);

//Show Metamask for users
async function requestAccount() {
    try{
        await window.ethereum.request({method: 'eth_requestAccounts'});
    } catch(err) {
        console.log('error');
        console.error(err);

        alert('Login to Metamask first');
    }
}

function App() {
    
    async function getLotteryPrice() {
        if(typeof window.ethereum !== 'undefined'){
            try{
                const data = await contract.price();
                const price  = data.toString();
                console.log('Data: ', ethers.utils.formatEther(price));
            } catch(err) {
                console.log('Error: ', err);
            }    
        }
    }

  return (
    <div className="App">
      <header className="App-header">
          <h1> Blockchain Lottery </h1>
        <p>
          Join the Blockchain Lottery and win millions every week.
        </p>
        <button
        className="join_lottery" onClick={() => getLotteryPrice()}
        >
          Enter Lottery
        </button>
      </header>
    </div>
  );
}

export default App;
