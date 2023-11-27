import React from "react";
import { IoFingerPrint } from "react-icons/io5";
const SignupForm = ({ Submitted }) => {
  return (
    <div className="signup relative w-[450px] px-[20px]  pt-[35px] pb-[30px] parent-shadow rounded-[20px]">
    
      <form
        className="signup relative w-[100%] flex flex-col"
        onSubmit={() => Submitted()}
      >
        <h2 className="text-[2em] mb-[30px] font-bold leading-[0.9em]">
          Hello!
          <br />
          <span className=" text-[0.65em]">Let get started!</span>
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="input-box">
            <label>Name</label>
            <br />
            <input type="text" placeholder="Full name..." required />
          </div>
          <div className="input-box">
            <label>User name</label>
            <br />
            <input type="text" placeholder="User name..." required />
          </div>
          <div className="input-box">
            <label>E-mail</label>
            <br />
            <input type="email" placeholder="Enter email..." required />
          </div>
          <div className="input-box">
            <label>Password</label>
            <br />
            <input type="password" placeholder="Enter pasworrd..." required />
          </div>
        </div>
        <div className="input-box">
          <button type="submit">Proceed</button>
        </div>
      </form>
      <h3 className="py-5 text-center">OR</h3>
      <div className="fingerprint">
        <div className="finger-box shadow-sbtn">
          <IoFingerPrint className="svg" />
        </div>
        <p>Signup with fingerprint</p>
      </div>
    </div>
  );
};

export default SignupForm;
