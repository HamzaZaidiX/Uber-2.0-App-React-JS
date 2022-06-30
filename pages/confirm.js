/* eslint-disable react/jsx-key */
import { accessToken } from "mapbox-gl";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";
import Link from "next/link";
//import { carList } from "./data/carList";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setpickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getpickupCoordinates = () => {
    // Fetching Api Function
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaGFtemF6YWlkaSIsImEiOiJja3ZtY3RodzgwNGdlMzBwaWdjNWx5cTQ3In0.2s32bZnlSY-Qg5PFmoLrJw",
          limit: 1,
          limit: 1,
        })
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setpickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = () => {
    // Fetching Api Function
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaGFtemF6YWlkaSIsImEiOiJja3ZtY3RodzgwNGdlMzBwaWdjNWx5cTQ3In0.2s32bZnlSY-Qg5PFmoLrJw",
          limit: 1,
        })
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    if (pickup && dropoff) {
      getpickupCoordinates(pickup);
      getDropoffCoordinates(dropoff);
    }
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <ConfirmRideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <Link href="/ride">
            <ConfirmButton>Confirm Mini</ConfirmButton>
          </Link>
        </ConfirmButtonContainer>
      </ConfirmRideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;

const BackButton = tw.img`
h-full object-contain 
`;

const ConfirmButton = tw.div`
bg-black text-white text-center py-4 mx-4 my-4 text-xl cursor-pointer
`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const ConfirmRideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const Wrapper = tw.div`
h-screen flex flex-col
`;
