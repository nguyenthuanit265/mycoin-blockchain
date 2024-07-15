import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useHistory } from 'react-router';
import walletApi from '../../api/wallet';
import BigManLogo from '../../assets/logo/big-spaceman.png';
import WalletAccessLogo from '../../assets/wallet-access-icon.png';
import WalletLogo from '../../assets/wallet-icon.png';
import AccessWalletModal from './components/AccessWalletModal';
import CreateWalletModal from './components/CreateWalletModal';
const Wallet = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenAccess, setIsOpenAccess] = useState(false);
  const history = useHistory();
  const onCreateWallet = () => {
    setIsOpenCreate(true);
  };
  const onAccessWallet = () => {
    setIsOpenAccess(true);
  };

  const accessWallet = async privatekey => {
    const params = {
      pk: privatekey
    };
    try {
      const res = await walletApi.accessWallet(params);
      if (res.status === 'success') {
        history.push('/wallet/dashboard', { privateKey: privatekey });
      }
    } catch (err) { }
  };
  return (
    <div className="w-full h-screen mt-3 flex flex-col items-center ">
      <section className="flex justify-center items-center">
        <div
          className="bg-blue-500 w-2/4 h-60 grid grid-cols-3 gap-2 p-10 rounded mr-5 cursor-pointer transition ease-in-out transform hover:-translate-y-2"
          onClick={onCreateWallet}
        >
          {/* <div className="flex items-center">
            <img className="object-contain w-32 h-32" src={WalletLogo} alt="wallet" />
          </div> */}
          <div className="col-span-4 flex flex-col justify-between items-start">
            <p className="text-white font-bold text-2xl">Create A New Wallet</p>
            {/* <p className="text-white font-normal text-sm">
            </p> */}
            {/* <div className="flex text-white font-bold text-lg justify-start items-center">
              <p className="mr-2">Get started (Get Private key)</p> <AiOutlineArrowRight />
            </div> */}
          </div>
        </div>
        <div
          className="bg-green-500 w-2/4 h-60 grid grid-cols-3 gap-4 p-10 rounded cursor-pointer transition ease-in-out transform hover:-translate-y-2"
          onClick={onAccessWallet}
        >
          {/* <div className="flex items-center">
            <img className="object-contain w-32 h-32" src={WalletAccessLogo} alt="wallet" />
          </div> */}
          <div className="col-span-4 flex flex-col justify-between items-start">
            <p className="text-white font-bold text-2xl">Access My Wallet</p>
            {/* <p className="text-white font-normal text-sm"></p> */}
            {/* <div className="flex text-white font-bold text-lg justify-start items-center">
              <p className="mr-2">Get started</p> <AiOutlineArrowRight />
            </div> */}
          </div>
        </div>
      </section>
      <CreateWalletModal isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} />
      <AccessWalletModal isOpen={isOpenAccess} setIsOpen={setIsOpenAccess} onSubmit={accessWallet} />
    </div>
  );
};

export default Wallet;
