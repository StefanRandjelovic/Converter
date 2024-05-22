// DEV DEPENDENCY
import { useEffect, useRef, useState } from "react";
// COMPONENTS
import UnitChooser from "@components/UnitChooser";
import InputField from "@components/InputField";
import Title from "@components/Title";
// INFO
import { unitsWeight } from "@info/infoArray";
// FUNCTIONS
import { handleWeightCalculation } from "@functions/functions";
// STYLE
import "@style/weightConvert.scss";

const WeightConvert = () => {
  const [weight, setWeight] = useState(0);
  const [message, setMessage] = useState("Enter a number");
  const [showModal, setShowModal] = useState(false);
  const [unit, setUnit] = useState("");
  const [showModal2, setShowModal2] = useState(false);
  const [unit2, setUnit2] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    handleWeightCalculation(
      { target: { value: inputRef.current.value } },
      setMessage,
      setWeight,
      unit,
      unit2
    );
  }, [unit2, unit]);

  return (
    <main>
      <Title cls="title" title="Weight Converter" />
      <UnitChooser
        modal={showModal}
        showModal={setShowModal}
        unit={unitsWeight}
        setUnit={setUnit}
        chosenUnit={unit}
      />
      <InputField
        cls="input"
        ref={inputRef}
        unit={unit}
        func={(event) =>
          handleWeightCalculation(event, setMessage, setWeight, unit, unit2)
        }
      />
      <p id="message">{message}</p>
      <UnitChooser
        modal={showModal2}
        showModal={setShowModal2}
        unit={unitsWeight}
        setUnit={setUnit2}
        chosenUnit={unit2}
      />
      <input
        className="output"
        type="text"
        disabled={unit2 ? false : true}
        value={weight}
      />
    </main>
  );
};

export default WeightConvert;
