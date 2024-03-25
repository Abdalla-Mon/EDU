import { apiUrl } from "../../Urls/urls";

export async function handleRequestSubmit(
  data,
  setLoading,
  setSubmitMessage,
  path,
  isFileUpload = false
) {
  const body = isFileUpload ? data : JSON.stringify(data);
  const headers = isFileUpload ? {} : { "Content-Type": "application/json" };
  setLoading(true);
  const request = await fetch(apiUrl + path, {
    method: "POST",
    body,
    headers: headers,
  });
  setLoading(false);
  const response = await request.json();

  setSubmitMessage(response.message);
  if (response.redirect) {
    setSubmitMessage(null);

    // window.location.href = response.user.role.toLowerCase();
  }

  await window.setTimeout(() => {
    setSubmitMessage("");
  }, 10000);
  return response;
}
