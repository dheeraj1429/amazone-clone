import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { setUser } from "../../../Redux/Action/action";

import { CustomButtonComponent } from "../../../Components/CustomButtonComponent/CustomButtonComponent";

import { signInWithGoogle } from "../../../Components/Firebase/Firebase.utili";

import "./SignInComponent.css";

function SignInComponent() {
  const dispatch = useDispatch();

  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  const [ErrorPara, setErrorPara] = useState("");

  const ChangeValueHander = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUserData({ ...UserData, [name]: value });
  };

  const { name, email, password, conformPassword } = UserData;

  const SignInHandler = async (event) => {
    event.preventDefault();

    if (name && email && password && conformPassword) {
      if (password === conformPassword) {
        const res = await fetch(`https://e-clone-39043-default-rtdb.firebaseio.com/data.json`, {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            password,
            conformPassword,
          }),
        });

        if (res) {
          setErrorPara("Account created successfuly");
          dispatch(setUser({ UserData }));
        }
      } else {
        setErrorPara("Conform password and password is not the same");
      }
    } else {
      setErrorPara("Please fill the form");
    }
  };

  return (
    <div className="SignInDiv">
      <h1>Sign-In</h1>
      <form method="POST">
        <p>Name</p>
        <input type="text" name="name" value={UserData.name} onChange={ChangeValueHander} />
        <p>Email</p>
        <input type="email" name="email" value={UserData.email} onChange={ChangeValueHander} />
        <p>Password</p>
        <input type="password" name="password" value={UserData.password} onChange={ChangeValueHander} />
        <p>Conform Password</p>
        <input type="password" name="conformPassword" value={UserData.conformPassword} onChange={ChangeValueHander} />
        <p className="ErrorPara">{ErrorPara}</p>
        <div className="ButtonGroup">
          <CustomButtonComponent data={"Sign In"} extraClass={"WideButton"} onClickData={SignInHandler} type={"submit"} />
        </div>
      </form>
      <CustomButtonComponent data={"Sign in with google"} extraClass={"WideButton GoogleButton"} onClickData={signInWithGoogle} type={"buttom"} />
    </div>
  );
}

export default SignInComponent;
