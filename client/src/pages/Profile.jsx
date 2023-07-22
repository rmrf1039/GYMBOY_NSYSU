import { Link } from "react-router-dom";
import { useAccount, useDisconnect } from 'wagmi';
import QRCode from "react-qr-code";

import { Container, IconButton, Text } from "nes-ui-react";

const Profile = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <>
      <Container roundedCorners title="Account Address" alignTitle="center" className="m-3 mt-0">
        {address ?
          <div className="d-flex flex-column align-items-center justify-content-center">
            <QRCode
              value={address}
              bgColor="transparent"
              fgColor="#000"
              className="w-100 h-100"
            />
          </div>
          :
          <h1 className="text-center">Loading...</h1>
        }
      </Container>

      <div className="ps-3 pe-3">
        <Link to="/person_info">
          <IconButton color="primary" size="large" className="w-100 mb-3">
            <span className="material-symbols-sharp">edit</span>
            <Text size="large" className="ms-2">Edit Profile</Text>
          </IconButton>
        </Link>
        <IconButton color="error" size="large" className="w-100" onClick={() => disconnect()}>
          <span className="material-symbols-sharp">logout</span>
          <Text size="large" className="ms-2">Logout</Text>
        </IconButton>
      </div>
    </>
  );
}

export default Profile;
