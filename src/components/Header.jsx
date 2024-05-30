// DEV DEPENDENCIES
import { Link, useNavigate } from "react-router-dom";
// IMAGE
import Chevron from "@images/chevron.svg";
// STYLE
import "@style/header.scss";

const Header = () => {
  const location = useNavigate();
  return (
    <header>
      <img src={Chevron} alt="back" onClick={() => location(-1)} />
      <Link to={"/weightConvert"}>Weight Converter</Link>
      <Link to={"/waterNeeds"}>How much pesticide do I need?</Link>
    </header>
  );
};

export default Header;
