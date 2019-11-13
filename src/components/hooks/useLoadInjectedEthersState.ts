import React from 'react';
import { Store, ActionType } from '../../common/Store';
import { ethers } from 'ethers';



export default function useLoadInjectedEthersState() {
  const { state, dispatch } = React.useContext(Store);

  
  React.useEffect(() => {
    if (state.injectedProvider){
      console.log("using ethers");

      if (state.injectedProvider.selectedAddress){

        dispatch({
          type: ActionType.SET_SELECTED_ETH_ADDR,
          payload: state.injectedProvider.selectedAddress
        });

      }else{
        console.warn('dont have selected address, yet');
      }
    }
  }, [state.injectedProvider]);



  React.useEffect(() => {
    const fetchBalance = async() => {
      if (state.injectedProvider){
        let provider = new ethers.providers.Web3Provider(state.injectedProvider);
        let balance = await provider.getBalance(state.selectedEthAddr);
        let converted = await ethers.utils.formatEther(balance);

        dispatch({
          type: ActionType.SET_ETHERS_PROVIDER,
          payload: provider
        })

        dispatch({
          type: ActionType.SET_ETH_BALANCE,
          payload: converted
        })
      }
    }

    if (state.selectedEthAddr){
      fetchBalance();
    }
  }, [state.selectedEthAddr])
}

