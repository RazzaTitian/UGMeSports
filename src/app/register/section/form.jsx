import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/templates/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/templates/EyeSlashFilledIcon";
import { ButtonPrimary, ButtonSecondary } from "@/templates/buttons";
import SectionHeading from "@/templates/heading";
import { oxygen } from "@/templates/font";
import { FaGoogle } from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      className={`w-2/5 bg-absolute-white py-8 px-6 shadow rounded-lg sm:px-10 `}
    >
      <div className="text-center">
        <SectionHeading
          sub={"WELCOME FUTURE INITIATES!"}
          title={"Sign Up"}
        ></SectionHeading>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="space-y-6">
            <Input
              id="name"
              name="name"
              label="Name"
              type="text"
              variant="bordered"
              autoComplete="name"
              placeholder="Insert your name here"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              isInvalid={!!errors.name}
              validationState={errors.name ? "invalid" : "valid"}
              errorMessage={errors.name}
            />
            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="bordered"
              autoComplete="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              isInvalid={!!errors.email}
              validationState={errors.email ? "invalid" : "valid"}
              errorMessage={errors.email}
            />
            <Input
              id="password"
              name="password"
              variant="bordered"
              label="Password"
              type={isVisible ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Insert Password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              isInvalid={!!errors.password}
              validationState={errors.password ? "invalid" : "valid"}
              errorMessage={errors.password}
              endContent={
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  className="focus:outline-none"
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={isConfirmVisible ? "text" : "password"}
              variant="bordered"
              label="Confirm password"
              autoComplete="current-password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              isInvalid={!!errors.confirmPassword}
              validationState={errors.confirmPassword ? "invalid" : "valid"}
              errorMessage={errors.confirmPassword}
              endContent={
                <button
                  type="button"
                  onClick={() => setIsConfirmVisible(!isConfirmVisible)}
                  className="focus:outline-none"
                >
                  {isConfirmVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <a
                href="/terms"
                target="_blank"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>

        <div>
          <ButtonPrimary width="full" size="lg" onClick={handleSubmit}>
            Register
          </ButtonPrimary>
        </div>

        <div className="flex justify-center mt-4">
          <ButtonSecondary
            width="full"
            size="lg"
            onClick={() => console.log("Google register")}
          >
            <div className="flex items-center justify-center gap-4 w-full">
              <FaGoogle className="text-4xl" />
              <span>Register with Google</span>
            </div>
          </ButtonSecondary>
        </div>

        <div className={oxygen + "text-center mt-4"}>
          <p className="text-md text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-primary-dark hover:text-teal-secondary"
            >
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
