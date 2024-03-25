"use client";
import { DisplayLoadingAndErrors } from "../../../helpers/components/DisplayLoading";
import { useEffect, useState } from "react";
import { handleRequestSubmit } from "../../../helpers/functions/handleSubmit";
import { useRouter } from "next/navigation";

export default function ConfirmationPage({ token }) {
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const router = useRouter();
  useEffect(() => {
    async function handleConfirmation() {
      if (isConfirmed) return;
      const response = await handleRequestSubmit(
        {},
        setLoading,
        setSubmitMessage,
        `auth/confirm/${token}`,
        false,
        null
      );
      if (response.redirect) {
        router.push(response.user.role.toLowerCase());
      }
    }

    handleConfirmation();
  }, [isConfirmed]); // Add isConfirmed to the dependency array

  return (
    <DisplayLoadingAndErrors
      loading={loading}
      setSubmitMessage={setSubmitMessage}
      submitMessage={submitMessage}
    />
  );
}
