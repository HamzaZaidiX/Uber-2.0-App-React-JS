import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, [router]);

  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" alt="uber logo" />
      <Title>Login to access your account</Title>
      <LoginImage
        src="https://i.ibb.co/CsV9RYZ/login-image.png"
        alt="Svg image"
      />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        <SignInText>
          <GoogleSvg
            src="https://d1a3f4spazzrp4.cloudfront.net/arch-frontend/1.1.1/d1a3f4spazzrp4.cloudfront.net/google-btn-logo-389b92241b.svg"
            alt=""
          />
          CONTINUE WITH GOOGLE
        </SignInText>
      </SignInButton>

      <SignUp>
        Don&apos;t have an account?
        <SignUpLink>Sign up</SignUpLink>
      </SignUp>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen bg-gray-200 w-screen p-4 overflow-x-hidden select-none
`;

const SignInButton = tw.button`
    bg-blue-500 text-white text-center py-4 mt-8 self-center w-full cursor-pointer select-none text-xl flex justify-center align-center
`;
const UberLogo = tw.img`
    h-10 w-auto object-contain self-start select-none sm:align-center sm:justify-center
`;

const Title = tw.div`
    text-5xl pt-3 pl-5 text-gray-500
`;
const SignInText = tw.div`
    text-white text-center cursor-pointer select-none text-xl flex justify-center align-center flex-1 items-center
`;
const LoginImage = tw.img`
    w-full object-contain select-none
`;

const GoogleSvg = tw.img`
    justify-center mr-2
`;

const SignUp = tw.div`
    text-center flex text-small text-black justify-center mt-3 select-none
`;

const SignUpLink = tw.a`
     text-small text-blue-600 ml-2 cursor-pointer
`;
