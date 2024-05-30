export const handleWeightCalculation = (
  event,
  setMessage,
  setWeight,
  convert,
  converted
) => {
  if (isNaN(event.target.value)) {
    setMessage("Enter a number");
    return;
  } else if (!event.target.value) {
    setMessage("Enter a number");
  } else if (event.target.value < 0) {
    setMessage("Enter a number bigger or equal to zero.");
    return;
  } else if (event.target.value.length > 15) {
    return;
  } else if (event.target.value) {
    setMessage("");
  }

  // Grams to...
  if (convert === "g" && converted === "g") {
    setWeight(event.target.value);
  } else if (convert === "g" && converted === "kg") {
    setWeight(event.target.value / 1000);
  } else if (convert === "g" && converted === "metric ton") {
    setWeight(event.target.value / 1000000);
  } else if (convert === "g" && converted === "lbs") {
    setWeight(event.target.value / 453.59);
  } else if (convert === "g" && converted === "oz") {
    setWeight(event.target.value / 28.35);
  } else if (convert === "g" && converted === "short ton/American ton") {
    setWeight(event.target.value / 907184.7408);
  } else if (convert === "g" && converted === "long ton/Imperial ton") {
    setWeight(event.target.value / 1016046.9084);
  }

  // Kilograms to...
  if (convert === "kg" && converted === "g") {
    setWeight(event.target.value * 1000);
  } else if (convert === "kg" && converted === "kg") {
    setWeight(event.target.value);
  } else if (convert === "kg" && converted === "metric ton") {
    setWeight(event.target.value / 1000);
  } else if (convert === "kg" && converted === "lbs") {
    setWeight(event.target.value * 2.20462262);
  } else if (convert === "kg" && converted === "oz") {
    setWeight(event.target.value * 35.2739619);
  } else if (convert === "kg" && converted === "short ton/American ton") {
    setWeight(event.target.value / 907.18474);
  } else if (convert === "kg" && converted === "long ton/Imperial ton") {
    setWeight(event.target.value / 1016.0469);
  }

  // Metric ton to...
  if (convert === "metric ton" && converted === "g") {
    setWeight(event.target.value * 1000000);
  } else if (convert === "metric ton" && converted === "kg") {
    setWeight(event.target.value * 1000);
  } else if (convert === "metric ton" && converted === "metric ton") {
    setWeight(event.target.value);
  } else if (convert === "metric ton" && converted === "lbs") {
    setWeight(event.target.value * 2204.62262);
  } else if (convert === "metric ton" && converted === "oz") {
    setWeight(event.target.value * 35273.9619);
  } else if (
    convert === "metric ton" &&
    converted === "short ton/American ton"
  ) {
    setWeight(event.target.value * 1.1023);
  } else if (
    convert === "metric ton" &&
    converted === "long ton/Imperial ton"
  ) {
    setWeight(event.target.value / 1.0165);
  }

  // Pounds to...
  if (convert === "lbs" && converted === "g") {
    setWeight(event.target.value * 453.59237);
  } else if (convert === "lbs" && converted === "kg") {
    setWeight(event.target.value * 0.45359237);
  } else if (convert === "lbs" && converted === "metric ton") {
    setWeight(event.target.value * 0.0004536);
  } else if (convert === "lbs" && converted === "lbs") {
    setWeight(event.target.value);
  } else if (convert === "lbs" && converted === "oz") {
    setWeight(event.target.value * 16);
  } else if (convert === "lbs" && converted === "short ton/American ton") {
    setWeight(event.target.value * 0.0005);
  } else if (convert === "lbs" && converted === "long ton/Imperial ton") {
    setWeight(event.target.value * 0.0004464);
  }

  // Ounces to...
  if (convert === "oz" && converted === "g") {
    setWeight(event.target.value * 28.3495231);
  } else if (convert === "oz" && converted === "kg") {
    setWeight(event.target.value * 0.0283495231);
  } else if (convert === "oz" && converted === "metric ton") {
    setWeight(event.target.value * 2.835e-5);
  } else if (convert === "oz" && converted === "lbs") {
    setWeight(event.target.value / 16);
  } else if (convert === "oz" && converted === "oz") {
    setWeight(event.target.value);
  } else if (convert === "oz" && converted === "short ton/American ton") {
    setWeight(event.target.value / 32000);
  } else if (convert === "oz" && converted === "long ton/Imperial ton") {
    setWeight(event.target.value / 35839.72475);
  }

  // Short ton/American ton to...
  if (convert === "short ton/American ton" && converted === "g") {
    setWeight(event.target.value * 907184.74);
  } else if (convert === "short ton/American ton" && converted === "kg") {
    setWeight(event.target.value * 907.18474);
  } else if (
    convert === "short ton/American ton" &&
    converted === "metric ton"
  ) {
    setWeight(event.target.value * 0.90718474);
  } else if (convert === "short ton/American ton" && converted === "lbs") {
    setWeight(event.target.value * 2000);
  } else if (convert === "short ton/American ton" && converted === "oz") {
    setWeight(event.target.value * 32000);
  } else if (
    convert === "short ton/American ton" &&
    converted === "short ton/American ton"
  ) {
    setWeight(event.target.value);
  } else if (
    convert === "short ton/American ton" &&
    converted === "long ton/Imperial ton"
  ) {
    setWeight(event.target.value * 0.892857143);
  }

  // Long ton/Imperial ton to...
  if (convert === "long ton/Imperial ton" && converted === "g") {
    setWeight(event.target.value * 1016046.91);
  } else if (convert === "long ton/Imperial ton" && converted === "kg") {
    setWeight(event.target.value * 1016.0469);
  } else if (
    convert === "long ton/Imperial ton" &&
    converted === "metric ton"
  ) {
    setWeight(event.target.value * 1.016046);
  } else if (convert === "long ton/Imperial ton" && converted === "lbs") {
    setWeight(event.target.value * 2240);
  } else if (convert === "long ton/Imperial ton" && converted === "oz") {
    setWeight(event.target.value * 35840);
  } else if (
    convert === "long ton/Imperial ton" &&
    converted === "short ton/American ton"
  ) {
    setWeight(event.target.value * 1.12);
  } else if (
    convert === "long ton/Imperial ton" &&
    converted === "long ton/Imperial ton"
  ) {
    setWeight(event.target.value);
  }
};

export const handlePesticideAmount = (water, pesticide, message, amount) => {
  if (isNaN(water) || isNaN(pesticide)) {
    message("Enter real values");
    amount(0);
    return;
  } else if (!water && !pesticide) {
    message("Enter water amount and pesticide concentration");
    amount(0);
    return;
  } else if (!water) {
    message("Enter water amount");
    amount(0);
    return;
  } else if (!pesticide) {
    message("Enter pesticide concentration");
    amount(0);
    return;
  }
  const amounT = water * pesticide * 10;
  amount(amounT);
  message("");
};
