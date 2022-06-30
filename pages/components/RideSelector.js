import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = (props) => {
  const [duration, setDuration] = useState(0);

  const getDirections = (pickupCoordinates, dropoffCoordinates) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaGFtemF6YWlkaSIsImEiOiJja3ZtY3RodzgwNGdlMzBwaWdjNWx5cTQ3In0.2s32bZnlSY-Qg5PFmoLrJw",
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
    if (props.pickupCoordinates && props.dropoffCoordinates) {
      getDirections(props.pickupCoordinates, props.dropoffCoordinates);
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a Ride, or Swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service className="selected">{car.service}</Service>
              <Time>{car.time}</Time>
              <Details>{car.details}</Details>
            </CarDetails>
            <CarPrice>
              ${((duration / 100) * car.multiplier).toFixed(2)}
            </CarPrice>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Details = tw.div`
    text-xs text-gray-800
`;

const CarImage = tw.img`
    h-14 mr-4 select-none
`;
const CarDetails = tw.div`
    flex-1
`;
const Service = tw.div`
    font-medium select-none cursor-pointer
`;
const Time = tw.div`
    text-xs
`;
const CarPrice = tw.div`
    text-5m font-medium select-none cursor-pointer
`;

const Car = tw.div`
    flex bg-white p-4 items-center select-none cursor-pointer hover:bg-gray-200
`;

const CarList = tw.div`
    overflow-y-scroll bg-white overflow-x-hidden 
`;

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b select-none 
`;

const Wrapper = tw.div`
    flex-1 bg-white overflow-y-hidden flex flex-col overflow-x-hidden
`;
