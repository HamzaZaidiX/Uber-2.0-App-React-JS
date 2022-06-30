import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { useRouter } from "next/router";
import { carList } from "/pages/data/carList";

const CaptainFound = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [duration, setDuration] = useState(0);
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
        console.log(duration);
        setDuration(data.routes[0].duration);
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
        <Link href="/">
          <CancelButton src="https://img.icons8.com/ios-filled/50/000000/cancel.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <ConfirmRideContainer>
        <Header>
          <CaptainDetails>
            <CaptainImage src="/imgs/Captain.png" alt="Captain" />
            <CaptainName>Abdul Kareem</CaptainName>
          </CaptainDetails>
          <CarDetails>
            <CarImage
              src="https://i.ibb.co/cyvcpfF/uberx.png"
              alt="Car Image"
            />
            <CarColor>White Mini</CarColor>
            <CarNumberPlate>ABC-991</CarNumberPlate>
          </CarDetails>
        </Header>
        <CaptainArrivalContainer>
          <CaptainArrivalTime>Arriving in ~5 mins</CaptainArrivalTime>
          {/* <RideConfirmPrice>
            ${((duration / 100) * car.multiplier).toFixed(2)}
          </RideConfirmPrice> */}
        </CaptainArrivalContainer>
        <CallCaptainContainer>
          <CallCaptain>
            <CallCaptainImage src="/imgs/phone.png" alt="Phone" />
            Call Captain
          </CallCaptain>
          <ChatWithCaptain>
            <ChatCaptainImage src="/imgs/chat.png" alt="Chat" />
            Chat with Captain
          </ChatWithCaptain>
        </CallCaptainContainer>
        <ReportContainer>
          <ReportCaptain>
            <ReportImage src="/imgs/null.png" alt="Report" />
            Report Captain
          </ReportCaptain>
        </ReportContainer>
        <RideWithSafety>
          Ride with Safety and Follow Covid SOP&apos;s Please Wear Mask during
          Ride!
        </RideWithSafety>
      </ConfirmRideContainer>
    </Wrapper>
  );
};

export default CaptainFound;

const Wrapper = tw.div`
h-screen flex flex-col select-none
`;

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;

const CancelButton = tw.img`
h-full object-contain 
`;
const ConfirmRideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const Header = tw.div`
flex justify-between items-center mt-5 h-50
`;

const CaptainDetails = tw.div`
flex text-center justify-center ml-20 flex-nowrap
`;

const CaptainName = tw.div`
w-50 ml-4 text-sm font-bold flex nowrap mt-2
`;

const CaptainImage = tw.img`
h-12 w-12 rounded-full border border-gray-300 p-px
`;

const CarDetails = tw.div`
flex mr-20 text-center justify-center text-black text-sm gap-5
`;

const CarColor = tw.h1`
 text-black font-bold mt-3
`;

const CarImage = tw.img`
    h-10 select-none
`;

const CarNumberPlate = tw.h1`
 text-white font-bold border-2 p-2 border-black rounded-md bg-black
`;

const CaptainArrivalContainer = tw.div`
  flex py-2 h-50 border-b select-none justify-center items-center
`;

const CarArrivalTime = tw.h1`
text-gray-500 text-center text-sm justify-center
`;

const CaptainArrivalTime = tw.h1`
text-gray-500 text-center text-sm justify-start
`;

const RideConfirmPrice = tw.h1`
text-gray-500 text-center text-lg
`;

const CallCaptainContainer = tw.div`
flex flex-row
`;

const CallCaptain = tw.div`
h-35 p-5 bg-gray-200 m-1 flex-1 flex flex-row items-center rounded-lg justify-center text-lg font-medium cursor-pointer hover:bg-gray-300
`;

const ChatWithCaptain = tw.div`
h-35 p-5 bg-gray-200 m-1 flex-1 flex flex-row items-center rounded-lg justify-center text-lg font-medium cursor-pointer hover:bg-gray-300
`;

const CallCaptainImage = tw.img`
  h-10 mr-3
`;

const ChatCaptainImage = tw.img`
  h-10 mr-3
`;

const ReportContainer = tw.div`
flex flex-row
`;

const ReportCaptain = tw.div`
h-30 w-full p-4 bg-gray-200 m-1 flex-1 flex flex-row rounded-lg justify-start text-lg font-medium cursor-pointer hover:bg-gray-300 hover:text-red-600
`;

const ReportImage = tw.img`
  h-5 mr-3 justify-center items-center mt-1
`;

const RideWithSafety = tw.h1`
text-red-500 mt-2 text-center text-sm justify-center
`;
