import React, { useState } from "react";

const QuickSearch = () => {
  const [bType, setBType] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");

  return (
    <form>
      <h4>Select *Business Type</h4>
      <select name="Business Type" id="businessType">
        <option value="Hotels">Hotels</option>
        <option value="Museums">Museums</option>
        <option value="Optometry">Optometry</option>
        <option value="Dentistry">Dentistry</option>
        <option value="National Parks">National Parks</option>
        <option value="Beaches">Beaches</option>
      </select>
    </form>
  );
};

export default QuickSearch;
