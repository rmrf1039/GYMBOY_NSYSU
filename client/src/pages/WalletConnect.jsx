import { Web3Modal, useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi';
import { projectId, ethereumClient } from '../providers/WagmiProvider';
import { useAxios } from '../providers/AxiosProvider';

import { IconButton, Text, Br, Heading } from 'nes-ui-react';

import metamaskLogo from '../assets/img/metamask_logo.png';

export default function MetamaskSetup() {
  const { open } = useWeb3Modal()
  const { isConnected } = useAccount()
  const { state, signin } = useAxios()

  return (
    <>
      <div className="vh-100 bg-lightGray d-flex align-items-center justify-content-center flex-column">
        <img src={metamaskLogo} width={"300"} alt="metamask logo" />
        <Heading size="large" className="mb-5 text-center">歡迎來到 GYMBOY</Heading>
        <Br />
        <Br />
        <Br />
      </div>
      <div className="position-fixed bottom-0 start-50 translate-middle-x w-100 p-3 pb-5 row g-0">
        {
          <IconButton className="m-0" color="primary" size="large" onClick={() => open()}>
            <Text size="large" className="text-center w-100">{ isConnected ? '查看' : '連接' }錢包</Text>
          </IconButton>
        }
        {
          isConnected && state.isNonced &&
          <IconButton className="mt-3" color="primary" size="large" onClick={() => signin()}>
            <Text size="large" className="text-center w-100">登入</Text>
          </IconButton>
        }
      </div>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          '--w3m-font-family': '"VT323", monospace',
          '--w3m-background-color': '#496183',
          '--w3m-z-index': 100,
          '--w3m-background-border-radius': 0,
          '--w3m-container-border-radius': 0,
          '--w3m-button-border-radius': 0,
          '--w3m-text-medium-regular-font-family': '"Press Start 2P", cursive',
          '--w3m-text-big-bold-size': '1.4rem',
          '--w3m-text-xsmall-bold-size': '1rem',
          '--w3m-text-xsmall-regular-size': '1.25rem',
        }}
      />
    </>
  );
};
