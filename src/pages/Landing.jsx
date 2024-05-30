// DEV DEPENDENCY
import { useState } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Title from "@components/Title";
// STYLES
import "@style/landing.scss";

const Landing = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 1500);

  return (
    <main>
      {loading && <h1 id="welcomeTitle">Welcome...</h1>}
      {!loading && (
        <>
          <Title title="Converter app" cls="landing" />
          <p>Please choose from one of these converters.</p>
          <Link to={"/weightConvert"}>Weight converter</Link>
          <Link to={"/waterNeeds"}>How much pesticide do I need?</Link>
        </>
      )}
    </main>
  );
};

export default Landing;
