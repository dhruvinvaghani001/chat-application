import React, { useRef } from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Button from "../components/Button";
import AuthForm from "../components/AuthForm";

const SignUp = () => {

  return (
    <div className="w-full h-[100vh]  flex justify-center items-center">
      <div className="form_conatiner w-[90%]  md:w-1/2 lg:w-1/4 bg-gray-800 rounded-xl">
        <div>
          <h1 className="text-xl md:text-3xl  flex justify-center mt-6 font-bold ">
            Create Your Account !
          </h1>
        </div>

        <div className="form p-6 mt-0 md:mt-6">
          <AuthForm type="signup" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
