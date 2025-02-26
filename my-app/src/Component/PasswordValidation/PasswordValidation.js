import { useState } from "react";

const PasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strengthText, setStrengthText] = useState("");
  const [strengthColor, setStrengthColor] = useState("");

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const passwordValidCheck = (e) => {
    const currentPassword = e.target.value.trim(); // Get the current input value
    setPassword(currentPassword); // Update the password state

    let strength = 0;

    // Password strength checks based on the current password
    if (/[a-z]/.test(currentPassword)) strength++;
    if (/[A-Z]/.test(currentPassword)) strength++;
    if (/[0-9]/.test(currentPassword)) strength++;
    if (/[^a-zA-Z0-9]/.test(currentPassword)) strength++;
    if (currentPassword.length >= 8) strength++;

    if (strength <= 2) {
      setStrengthText("Weak Password");
      setStrengthColor("red");
    } else if (strength <= 4) {
      setStrengthText("Moderate Password");
      setStrengthColor("orange");
    } else {
      setStrengthText("Strong Password");
      setStrengthColor("green");
    }
  };
  console.log(strengthColor);
  return (
    <div>
      <h4 className="text-3xl font-bold underline text-center mb-4">
        Password Validation
      </h4>
      <section>
        <label className="text-2xl font-medium ml-10">Enter Password</label>
        <input
          value={password}
          type={showPassword ? "text" : "password"}
          onChange={passwordValidCheck}
          className="w-60 border-2 font-semibold border-gray-400 rounded-md pl-2"
        />
        <button
          type="button"
          onClick={handlePassword}
          className="ml-2 text-blue-500"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </section>
      <section>
        {/* Dynamically apply the color class */}
        <div className={`text-${strengthColor}-500`}>{strengthText}</div>
      </section>
    </div>
  );
};

export default PasswordValidation;
