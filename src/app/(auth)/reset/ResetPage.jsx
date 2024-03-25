"use client";
import MainForm from "../../components/FormComponents/Forms/MainForm/MainForm";
import { DisplayLoadingAndErrors } from "../../../helpers/components/DisplayLoading";
import { useState } from "react";
import { handleRequestSubmit } from "../../../helpers/functions/handleSubmit";
import { useDispatch } from "react-redux";
import { resetInputs, resetPasswordInputs } from "./data";
import Link from "next/link";
import { pageUrl } from "../../../Urls/urls";

export default function ResetPage({ token }) {
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const dispatch = useDispatch();

  async function handleReset(data) {
    await handleRequestSubmit(
      data,
      setLoading,
      setSubmitMessage,
      !token ? "auth/reset" : `auth/reset/${token}`,
      false
      // handleAuthState(dispatch, true, data.role)
    );
  }

  const subTitle = <Link href={pageUrl + "/login"}>Back to login page?</Link>;
  return (
    <>
      <DisplayLoadingAndErrors
        loading={loading}
        setSubmitMessage={setSubmitMessage}
        submitMessage={submitMessage}
      />
      <MainForm
        btnText={"Reset"}
        inputs={token ? resetPasswordInputs : resetInputs}
        formTitle={"Reset password"}
        onSubmit={handleReset}
        subTitle={subTitle}
      />
    </>
  );
}
