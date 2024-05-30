// DEV DEPENDENCY
import { useEffect, useRef, useState } from "react";
// COMPONENTS
import Table from "@components/Table";
import InputField from "@components/InputField";
// FUNCTIONS
import { handlePesticideAmount } from "@functions/functions";

const WaterNeeds = () => {
  const [waterAmount, setWaterAmount] = useState(0);
  const [pesticideAmount, setPesticideAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0);

  const inputRefWater = useRef(null);
  const inputRefPesticide = useRef(null);

  return (
    <main>
      <Table />
      <p>Choose the amount of water in liters</p>
      <InputField
        unit={true}
        func={(event) => {
          setWaterAmount(event.target.value);
          handlePesticideAmount(
            inputRefWater.current.value,
            inputRefPesticide.current.value,
            setMessage,
            setAmount
          );
        }}
        cls="mida"
        ref={inputRefWater}
      />
      <p>
        {waterAmount != 0 && waterAmount}{" "}
        {waterAmount != 0 && (waterAmount < 2 ? "liter" : "liters")}
      </p>
      <p>Choose the pesticide concentration in %</p>
      <InputField
        unit={true}
        func={(event) => {
          setPesticideAmount(event.target.value);
          handlePesticideAmount(
            inputRefWater.current.value,
            inputRefPesticide.current.value,
            setMessage,
            setAmount
          );
        }}
        cls="mida"
        ref={inputRefPesticide}
      />
      <p>
        {" "}
        {pesticideAmount !== 0 && pesticideAmount}{" "}
        {pesticideAmount !== 0 && "%"}
      </p>
      <p>{message}</p>
      <p>{amount != 0 && amount + " " + "ml/g"}</p>
    </main>
  );
};

export default WaterNeeds;
