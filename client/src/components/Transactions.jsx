import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import dummyData from "../utils/dummyData";

const Transactions = () => {

    const { currentAccount } = useContext(TransactionContext);
    return (
        <div className="flex w-full justofy-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h3 className="text-white text-3xl text-cener my-2">Latest transactions</h3>
                ) : (
                    <h3 className="text-white text-3xl text-cener my-2">
                        Connect your account to see your latest transactions</h3>
                )}
            </div>
        </div>
    );
}

export default Transactions;