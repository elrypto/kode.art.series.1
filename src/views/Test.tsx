import React from 'react'
import { Button } from 'antd';
import { notify } from '../common/Actions';
import useInjectedWeb3 from '../components/hooks/useInjectedWeb3';
import { Store } from '../common/Store';
import useLoadInjectedWeb3State from '../components/hooks/useLoadInjectedWeb3State';
import useLoadInjectedEthersState from '../components/hooks/useLoadInjectedEthersState';


const someTopSpace = {
  marginTop: '2em'
}

export default function Test() {
  const { state, dispatch } = React.useContext(Store);
  useInjectedWeb3();
  //useLoadInjectedWeb3State();
  useLoadInjectedEthersState();

  
  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            <div className="heading-underline"></div>
           


            <div className="row seeMe"> 
              <div className="col-md-8">
                Address
              </div>
              <div className="col-md-4">
                Balance
              </div>
            </div>
            <div className="row seeMe"> 
              <div className="col-md-8">
                {state.selectedEthAddr}
              </div>
              <div className="col-md-4">
                 b
              </div>
            </div>

              <p style={someTopSpace}> Test something here </p>
              <Button 
                type="dashed"
                onClick={ ()=> {
                  notify('ok');
                }}
              >
                Heres a button
              </Button>

          </div>
        </div>
      </div>
    </div>
  )
}
