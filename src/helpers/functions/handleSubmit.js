import { toast } from "react-toastify";
import { Failed, Success } from "@/UiComponents/ToastUpdate/ToastUpdate";
import { apiUrl } from "@/Urls/urls";

export async function handleRequestSubmit(
  data,
  setLoading,
  path,
  isFileUpload = false,
  toastMessage = "Sending...",
  setRedirect,
) {
  const toastId = toast.loading(toastMessage);
  const body = isFileUpload ? data : JSON.stringify(data);
  const headers = isFileUpload ? {} : { "Content-Type": "application/json" };
  setLoading(true);
  const id = toastId;
  try {
    const request = await fetch(apiUrl + path, {
      method: "POST",
      body,
      headers: headers,
    });
    const response = await request.json();
    if (response.status === 200) {
      toast.update(id, Success(response.message));
      setRedirect((prev) => !prev);
    } else {
      toast.update(id, Failed(response.message));
    }
  } catch (err) {
    toast.update(id, Failed("Error, " + err.message));
  } finally {
    setLoading(false);
  }
}
