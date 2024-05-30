// DEV DEPENDENCY
import { useRef, useState } from "react";
// COMPONENTS
import Table from "@components/Table";
import Header from "@components/Header";
import Title from "@components/Title";
import InputField from "@components/InputField";
// FUNCTIONS
import { handlePesticideAmount } from "@functions/functions";
// STYLE
import "@style/weightConvert.scss";
import "@style/howMuchWaterDoINeed.scss";

const WaterNeeds = () => {
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0);

  const inputRefWater = useRef(null);
  const inputRefPesticide = useRef(null);

  return (
    <main>
      <Header />
      <Table />
      <section id="pestSec">
        <Title title="Amount of pesticide needed calculator" />
        <div id="overlay">
          <div className="part">
            <p>Choose the amount of water in liters</p>
            <InputField
              unit={true}
              func={() =>
                handlePesticideAmount(
                  inputRefWater.current.value,
                  inputRefPesticide.current.value,
                  setMessage,
                  setAmount
                )
              }
              cls="input"
              ref={inputRefWater}
            />
          </div>
          <div className="part">
            <p>Choose the pesticide concentration in %</p>
            <InputField
              unit={true}
              func={() =>
                handlePesticideAmount(
                  inputRefWater.current.value,
                  inputRefPesticide.current.value,
                  setMessage,
                  setAmount
                )
              }
              cls="input"
              ref={inputRefPesticide}
            />
          </div>
          <div className="part">
            <p>{message}</p>
            <p>
              {amount != 0 && `You will need to use this much: ${amount} ml/g`}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WaterNeeds;
