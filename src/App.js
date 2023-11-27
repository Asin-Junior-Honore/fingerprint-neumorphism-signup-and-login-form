import { useState } from "react";
import "./App.css";
import Form from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import { Ratings } from "./Components/Succesmessage";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const Submitted = () => {
    setSubmitted(true);
  };

  return (
    <div className="App sm:flex-col px-[1em]">
      {submitted ? <Form /> : <SignupForm Submitted={Submitted} />}
    </div>
  );
}

export default App;
