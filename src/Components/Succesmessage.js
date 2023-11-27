import React from "react";
const Redirect = () => {
  window.location.reload();
};

export const Ratings = ({ value }) => {
  return (
    <div className="message py-[15px] px-[25px] border-succes">
      <h2 className="pb-5">
        Thanks <span className="font-bold">{value}!</span>
      </h2>
      <p className=" leading-6">
        Thank you for filling out our signup up <br />
        form.We are glad that you joined us.
        <br />
        For this reason,we are giving you a<br />
        speecial offer when you <span className="font-bold">Hire</span>
        <br />
        us for your next project <span>😊</span>
      </p>
      <button
        className="py-[8px] px-[19px] bg-black text-white mt-3 w-full rounded-lg"
        onClick={Redirect}
      >
        Redirect
      </button>
    </div>
  );
};
