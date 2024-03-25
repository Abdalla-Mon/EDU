"use client";
import MainForm from "../../components/FormComponents/Forms/MainForm/MainForm";
import { loginInputs } from "./data";
import { DisplayLoadingAndErrors } from "../../../helpers/components/DisplayLoading";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleRequestSubmit } from "../../../helpers/functions/handleSubmit";
import Link from "next/link";
import { pageUrl } from "../../../Urls/urls";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const dispatch = useDispatch();

  async function handleLogin(data) {
    await handleRequestSubmit(
      data,
      setLoading,
      setSubmitMessage,
      "auth/login",
      false
      // () => handleAuthState(dispatch, true, data.role)
    );
  }

  const subTitle = <Link href={pageUrl + "/signup"}>Create an account?</Link>;
  return (
    <>
      <DisplayLoadingAndErrors
        loading={loading}
        setSubmitMessage={setSubmitMessage}
        submitMessage={submitMessage}
      />
      <MainForm
        btnText={"Login"}
        inputs={loginInputs}
        formTitle={"Login to EDU"}
        onSubmit={handleLogin}
        subTitle={subTitle}
      >
        <Link href={pageUrl + "/reset"}>Forgot password?</Link>
      </MainForm>
    </>
  );
}
