import React, { useEffect, useState } from React;
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/contants'

export const TransactionContext = React.createContext();

const { ethereum } = window;

window.ethereum

const getEthereumContract = () => {
    const provider = new EtherscanProvider.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
}

console.log({
    provider, signer, transactionContract
})

export const TransactionProvider = ({ children }) => {
    return (
        <TransactionContext.Provider value={{ value: 'test' }}>
            {children}
        </TransactionContext.Provider>
    )
}