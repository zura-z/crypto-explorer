export function addCommas(numString) {
    const isDecimal = numString.includes(".");

    // Split the number into whole and decimal parts
    const [wholePart, decimalPart] = numString.split(".");

    const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Join the whole and decimal parts together with a dot (if decimal exists)
    const formattedNumber = isDecimal
      ? `${formattedWholePart}.${decimalPart}`
      : formattedWholePart;

    return formattedNumber;
  }