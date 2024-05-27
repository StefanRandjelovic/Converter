// DEV DEPENDENCIES
import { Link, useNavigate } from "react-router-dom";
// IMAGE
import Chevron from "@images/chevron.svg";

const Header = () => {
  return (
    <header>
      <img src={Chevron} alt="back" />
      <Link to={"/weightConvert"}>Weight Converter</Link>
    </header>
  );
};

export default Header;
