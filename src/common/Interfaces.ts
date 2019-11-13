import Web3 from "web3";

/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/
export type Dispatch = React.Dispatch<IAction>;


export interface IAppState {
  selectedEthAddr: string;
  ethWeb3: Web3| null;
  ethBalance: string;
  injectedProvider: any;
  ethersProvider: any;
}

export interface IAction {
  type: string; //enum from Store.ActionType
  payload: any;
}

/*
export interface ILoomConnectionInfo {
  networkAlias: string;  // LOCAL_DEV | TEST | EXTDEV | PROD
  writeUrl: string;    // 'ws://127.0.0.1:46658/websocket';
  readUrl: string;    //  'ws://127.0.0.1:46658/queryws';
  networkId : string; //  'default' 
}

export interface ILoomObject {
  contract: any;
  client: any;
  privateKey: Uint8Array|any;
  publicKey: Uint8Array|any;
  currentUserAddress: string;
  web3: any;
  instance: any;
  currentNetwork: string;

  connectionInfo: ILoomConnectionInfo|any;
}*/

