import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoFingerPrint } from "react-icons/io5";
import { Ratings } from "./Succesmessage";

const Form = () => {
  const [value, setValue] = useState("");
  const [verified, setVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVerified(true);
  };

  return (
    <>
      {verified ? (
        <Ratings value={value} />
      ) : (
        <div className="login flex justify-center items-center flex-col gap-10 relative w-[380px] px-[50px] pt-[35px] pb-[30px] parent-shadow rounded-[20px]">
          <form className="relative w-[100%]" onSubmit={handleSubmit}>
            <h2 className="text-[2em] mb-[30px] font-bold leading-[0.9em]">
              Hello!
              <br />
              <span className=" text-[0.65em]">Welcome back!</span>
            </h2>
            <div className="inputbox">
              <input
                type="text"
                placeholder="username..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="userdetails  shadow-input"
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="inputbox">
              <input
                type="password"
                placeholder="password..."
                className="userdetails  shadow-input"
                required
              />
              <FaLock className="icon" />
            </div>
            <label>
              <input type="checkbox" />
              keep me logged in
            </label>
            <div className="inputbox">
              <input
                type="submit"
                value="Log in"
                className="shadow-submitbtn"
              />
            </div>
          </form>
          <h3>OR</h3>
          <div className="fingerprint">
            <div className="finger-box shadow-submitbtn">
              <IoFingerPrint className="svg" />
            </div>
            <p>login with fingerprint</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
