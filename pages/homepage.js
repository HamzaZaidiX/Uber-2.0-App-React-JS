// import { useEffect, useState } from "react";
// import tw from "tailwind-styled-components";
// import Map from "./components/Map";
// import Link from "next/link";
// import { auth } from "../firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useRouter } from "next/router";

// export default function homepage() {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     return onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser({
//           name: user.displayName,
//           photoUrl: user.photoURL,
//         });
//       } else {
//         setUser(null);
//         router.push("/");
//       }
//     });
//   }, []);

//   return (
//     <Wrapper>
//       <Map />
//       <ActionItems>
//         <Header>
//           <UberLogo
//             src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
//             alt=""
//           />
//           <Profile>
//             <Name>{user && user.name}</Name>
//             <UserImage
//               src="https://lh3.googleusercontent.com/ogw/ADea4I4F_Ukgd9Jf9R8C8fsETR9uwb7J701U6xVJAIMwhQ=s32-c-mo"
//               onClick={() => signOut(auth)}
//             />
//           </Profile>
//         </Header>
//         <ActionButtons>
//           <Link to="/search">
//             <ActionButton>
//               <ActionButtonImage
//                 src="https://i.ibb.co/cyvcpfF/uberx.png"
//                 alt=""
//               />
//               Ride
//             </ActionButton>
//           </Link>
//           <Link to="/search">
//             <ActionButton>
//               <ActionButtonImage
//                 src="https://i.ibb.co/n776JLm/bike.png"
//                 alt=""
//               />
//               Wheels
//             </ActionButton>
//           </Link>
//           <Link to="/search">
//             <ActionButton>
//               <ActionButtonImage
//                 src="https://i.ibb.co/5RjchBg/uberschedule.png"
//                 alt=""
//               />
//               Reserve
//             </ActionButton>
//           </Link>
//         </ActionButtons>
//         <Link to="/search">
//           <InputButton>Where to?</InputButton>
//         </Link>
//       </ActionItems>
//     </Wrapper>
//   );
// }

// const Wrapper = tw.div`
//  flex flex-col h-screen
// `;

// const ActionItems = tw.div`
//   flex-1 p-4
// `;

// const Header = tw.div`
//   flex justify-between items-center
// `;

// const UberLogo = tw.img`
//   h-28 select-none
// `;

// const Profile = tw.div`
//   flex items-center
// `;

// const Name = tw.div`
//   mr-4 w-50 text-small
// `;
// const UserImage = tw.img`
//  h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer select-none
// `;

// const ActionButtons = tw.div`
//   flex
// `;

// const ActionButton = tw.div`
//   flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer select-none
// `;
// const ActionButtonImage = tw.img`
//   h-3/5
// `;

// const InputButton = tw.div`
//   h-15 bg-gray-200 text-2xl p-4 flex items-center mt-8 cursor-text
// `;
