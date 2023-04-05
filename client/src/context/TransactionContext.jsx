import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext();

const { ethereum } = window;

window.ethereum

const getEthereumContract = () => {
    const provider = new EtherscanProvider.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider, signer, transactionContract
    })
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(initialState)
    const [formData, setFormData] = useState({addressTo: "", amount: "", keyword: "", message: ""});
    
    const handleChange = (e, name) => {
        setFormData((prevStae) => ({...prevState, [name]: e.target.value}))
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts'});
    
            if(accounts.length){
                setCurrentAccount(accounts[0]);
    
                //getAllTransactions();
            } else {
                console.log("No account found")
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object")
        }

       
        console.log(accounts);
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object")
        }
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");
            //get the data 

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </TransactionContext.Provider>
    )
}