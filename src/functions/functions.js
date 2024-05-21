export const handleWeightCalculation = (
  event,
  setMessage,
  setWeight,
  convert,
  converted
) => {
  if (isNaN(event.target.value)) {
    setMessage("Enter a number.");
    return;
  } else if (event.target.value < 0) {
    setMessage("Enter a number bigger or equal to zero.");
    return;
  } else if (event.target.value.length > 15) {
    return;
  }

  if (convert === "g" && converted === "g") {
    setWeight(event.target.value);
  } else if (convert === "g" && converted === "kg") {
    setWeight(event.target.value / 1000);
  } else if (convert === "g" && converted === "ton") {
    setWeight(event.target.value / 1000000);
  } else if (convert === "g" && converted === "lb") {
    setWeight(event.target.value / 2204.62262);
  } else if (convert === "g" && converted === "oz") {
    setWeight(event.target.value / 35273.9619);
  }

  if (convert === "kg" && converted === "g") {
    setWeight((event.target.value / 1000).toFixed(2));
  } else if (convert === "kg" && converted === "kg") {
    setWeight(event.target.value);
  } else if (convert === "kg" && converted === "ton") {
    setWeight((event.target.value * 1000).toFixed(2));
  } else if (convert === "kg" && converted === "lb") {
    setWeight((event.target.value * 2.20462262).toFixed(2));
  } else if (convert === "kg" && converted === "oz") {
    setWeight((event.target.value * 35.2739619).toFixed(2));
  }
};
