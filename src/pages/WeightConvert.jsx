// DEV DEPENDENCY
import { useEffect, useRef, useState } from "react";
// COMPONENTS
import UnitChooser from "@components/UnitChooser";
// INFO
import { unitsWeight } from "@info/infoArray";
// FUNCTIONS
import { handleWeightCalculation } from "@functions/functions";

const WeightConvert = () => {
  const [weight, setWeight] = useState(0);
  const [message, setMessage] = useState("Enter a number.");
  const [showModal, setShowModal] = useState(false);
  const [unit, setUnit] = useState("");
  const [showModal2, setShowModal2] = useState(false);
  const [unit2, setUnit2] = useState("");

  console.log(unit);

  useEffect(() => {
    handleWeightCalculation(
      { target: { value: inputRef.current.value } },
      setMessage,
      setWeight,
      unit,
      unit2
    );
  }, [unit2, unit]);

  const inputRef = useRef(null);

  return (
    <main>
      <UnitChooser
        modal={showModal}
        showModal={setShowModal}
        unit={unitsWeight}
        setUnit={setUnit}
        chosenUnit={unit}
      />
      <input
        ref={inputRef}
        disabled={unit ? false : true}
        type="text"
        maxLength={15}
        onChange={(event) =>
          handleWeightCalculation(event, setMessage, setWeight, unit, unit2)
        }
      />
      <p>{message ? message : "Enter a number"}</p>
      <UnitChooser
        modal={showModal2}
        showModal={setShowModal2}
        unit={unitsWeight}
        setUnit={setUnit2}
        chosenUnit={unit2}
      />
      <input type="text" disabled={unit2 ? false : true} value={weight} />
    </main>
  );
};

export default WeightConvert;
