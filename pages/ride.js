import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Ride = () => {
  return (
    <Wrapper>
      <Map user-select="none" />
      <FindCaptainContainer>
        <FindCaptain>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Finding Captain Near you...")
                .pauseFor(3000)
                .deleteAll()
                .callFunction(() => {})
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </FindCaptain>
        <Spinner src="/spinner.gif" alt="spinner" />
        <ConfirmButtonContainer>
          <Link href="/captain">
            <ConfirmButton>Confirm</ConfirmButton>
          </Link>
          <Link href="/confirm">
            <CancelButton>Cancel</CancelButton>
          </Link>
        </ConfirmButtonContainer>
      </FindCaptainContainer>
    </Wrapper>
  );
};

export default Ride;

const Wrapper = tw.div`
flex flex-col h-screen overflow-hidden pointer-none
`;

const FindCaptainContainer = tw.div`
 flex flex-col absolute mt-40 py-5 ml-20 mr-20 z-10 h-300 justify-center text-center select-none
`;

const FindCaptain = tw.h1`
text-center text-black text-2xl font-bold mx-96 mb-5 justify-center
`;

const Spinner = tw.img`
 h-25 justify-center text-center mx-96 
`;

const ConfirmButton = tw.div`
bg-black text-white text-center text-xl p-5 mt-4 mb-4 cursor-pointer
`;

const CancelButton = tw.div`
bg-black text-white text-center text-xl p-5 mt-4 mb-4 cursor-pointer
`;

const ConfirmButtonContainer = tw.div`
flex justify-center gap-3.5 
`;
