const conversionFactors = {
    time: {
      s: 1,
      min: 60,
      hr: 3600
    },
    length: {
      mm: 1,
      cm: 10,
      m: 1000
    },
    pressure: {
      pa: 1,
      kpa: 1000,
      bar: 100000
    }
  };
  
  function populateConversionFactors() {
    const mainUnit = document.getElementById('mainUnit').value;
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
  
    // Clear existing options
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';
  
    // Populate conversion factors based on selected main unit
    const units = Object.keys(conversionFactors[mainUnit]);
    for (let unit of units) {
      const option = document.createElement('option');
      option.value = unit;
      option.text = unit;
      fromUnitSelect.appendChild(option);
    }
  
    // Clone options to "To" unit select
    const fromUnitOptions = fromUnitSelect.innerHTML;
    toUnitSelect.innerHTML = fromUnitOptions;
  }
  
  function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const mainUnit = document.getElementById('mainUnit').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;
  
    if (isNaN(value)) {
      document.getElementById('result').innerHTML = 'Please enter a valid number.';
      return;
    }
  
    if (mainUnit in conversionFactors && fromUnit in conversionFactors[mainUnit] && toUnit in conversionFactors[mainUnit]) {
      const fromFactor = conversionFactors[mainUnit][fromUnit];
      const toFactor = conversionFactors[mainUnit][toUnit];
      result = (value * fromFactor) / toFactor;
    } else {
      document.getElementById('result').innerHTML = 'Invalid unit conversion.';
      return;
    }
  
    document.getElementById('result').innerHTML = `Result: ${result.toFixed(5)}`;
  }