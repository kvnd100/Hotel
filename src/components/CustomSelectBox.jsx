import { useState } from "react";
import "./CustomSelectBox.css";

const CustomSelectBox = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ["Hikka Tranz by Cinnamon", "Option 2", "Option 3", "Option 4"];
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`custom-select-box ${isDropdownOpen ? "open" : ""}`}>
      <div className="selected-option" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedOption || "Hikka Tranz by Cinnamon"}
        <i className={`arrow-i ${isDropdownOpen ? "up" : "down"}`}>
          {" "}
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#333"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </i>
      </div>
      <ul className="options">
        {options.map((option, index) => (
          <li key={index} onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelectBox;
