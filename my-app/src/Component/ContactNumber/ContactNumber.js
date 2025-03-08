import React, { useState } from "react";

const ContactNumber = () => {
  const [contactNumber, setContactNumber] = useState("");

  const formatContactNumber = (event) => {
    let number = event.target.value.trim();
    if (number === "") {
      setContactNumber(number);
      return;
    }

    number = number.replaceAll(/[^0-9]*/g, "");

    while (number[0] === 0 || number[0] === 1) {
      number = number.slice(1);
    }
    if (number.length > 3) {
      number = `(${number.slice(0, 3)}) ${number.slice(3)}`;
    }
    if (number.length > 9) {
      number = `${number.slice(0, 9)}-${number.slice(9)}`;
    }
    if (number.length > 14) {
      number = number.slice(0, 14);
    }

    setContactNumber(number);
  };

  return (
    <div>
      <label for="Contact Number">Contact Number</label>
      <input
        type="text"
        value={contactNumber}
        placeholder="(xxx) xxx-xxxx"
        onChange={formatContactNumber}
      />
    </div>
  );
};

export default ContactNumber;
