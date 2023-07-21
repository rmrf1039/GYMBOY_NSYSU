import { useState, useMemo } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import { Container, Text, Badge, BadgeSplitted, Progress, IconButton, Menu, Heading, Button, Separator, Hr } from "nes-ui-react";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const WearDetail = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [showMoreMenu, setShowMoreMenu] = useState(false)

  const data = {
    tokenId: query.get("tokenId"),
    src: "https://i.seadn.io/gcs/files/e65f60618446f5d9897f2d5a97c30e76.png?auto=format&dpr=1&w=750",
  };

  return (
    <>
      <Container roundedCorners className="m-3 mt-0 inventory">
        <div className="d-flex mb-3">
          <div>
            <Button borderInverted color="warning" size="small" fontColor="black" onClick={() => setShowMoreMenu(true)}>Actions</Button>
            <Menu className="bg-light" open={showMoreMenu} modal onClose={() => setShowMoreMenu(false)}>
              <IconButton color="success" size="small" onClick={() => { }}>
                <span className="material-symbols-sharp">confirmation_number</span>
                <Text size="small">Exchange</Text>
              </IconButton>
              <Separator horizontal />
              <IconButton color="error" size="small" onClick={() => navigate(`/transfer?tokenId=${data.tokenId}`)}>
                <span className="material-symbols-sharp">currency_exchange</span>
                <Text size="small">Transfer</Text>
              </IconButton>
            </Menu>
          </div>
        </div>
        <div className="boxes1 mb-3">
          <div className="box">
            <img src={data.src} alt="nft" className="w-100" />
          </div>
        </div>
        <Heading  bottomBr dense size="large" className="mb-3 pt-0 text-center text-decoration-underline">LV.MAX Magic Hat</Heading>
        <div className="mb-3">
          <Badge backgroundColor="warning" text="Epic" color='#000' />
          <BadgeSplitted textLeft='20%' backgroundColor="error" text="Exp Bonus" />
        </div>
        <div className="mb-3">
          <Text size="medium" className="mb-1">Lucky</Text>
          <Progress value="30" max="100" color="warning" />
        </div>
        <div>
          <Text size="medium" className="mb-1">Work Max</Text>
          <Progress value="60" max="100" color="success" />
        </div>
        <Hr />
        <Button color="primary" size="medium" className="w-100">Use</Button>
      </Container>
    </>
  );
}

export default WearDetail;

