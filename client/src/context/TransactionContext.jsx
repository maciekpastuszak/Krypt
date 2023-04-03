import React, { useEffect, useState } from React;
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/contants'

export const TransactionContext = React.createContext();

const { ethereum } = window;

window.ethereum