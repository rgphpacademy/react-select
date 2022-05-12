import React, { useState } from "react";
import "./App.css";
import Select from "react-select";

const options = [
  { value: "bugatti", label: "Bugatti" },
  { value: "ferrari", label: "Ferrari" },
  { value: "am", label: "Aston Martin" },
  { value: "koenigsegg", label: "Koenigsegg" },
  { value: "bmw", label: "BMW" },
  { value: "cadillac", label: "Cadillac" },
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div className="App">
      <h3>You selected Cars</h3>
      <Select
        isMulti={true}
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default App;
