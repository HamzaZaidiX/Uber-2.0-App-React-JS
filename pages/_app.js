import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="image" type="icon" href="public/favicon.png" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
