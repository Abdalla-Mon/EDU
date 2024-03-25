"use client";
import MainForm from "../../components/FormComponents/Forms/MainForm/MainForm";
import { signupInputs } from "./data";
import { DisplayLoadingAndErrors } from "../../../helpers/components/DisplayLoading";
import { useState } from "react";
import { handleRequestSubmit } from "../../../helpers/functions/handleSubmit";
import { pageUrl } from "../../../Urls/urls";
import Link from "next/link";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSignUp(data) {
    await handleRequestSubmit(
      data,
      setLoading,
      setSubmitMessage,
      "auth/signup",
      false
      // () => handleAuthState(dispatch, true, data.role)
    );
  }

  const subTitle = (
    <Link href={pageUrl + "/login"}>Aleady have an account?</Link>
  );
  return (
    <>
      <DisplayLoadingAndErrors
        loading={loading}
        setSubmitMessage={setSubmitMessage}
        submitMessage={submitMessage}
      />
      <MainForm
        btnText={"Sign up "}
        inputs={signupInputs}
        formTitle={"Sign up "}
        onSubmit={handleSignUp}
        subTitle={subTitle}
      />
    </>
  );
}
