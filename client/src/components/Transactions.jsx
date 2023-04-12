import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import dummyData from "../utils/dummyData";

const Transactions = () => {
    return (
        <div className="flex w-full justofy-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {/* Latest transactions */}
            </div>
        </div>
    );
}

export default Transactions;