import { ToastContainer } from "react-toastify";

export default function ToastContainerLocal() {
  return (
    <ToastContainer
      position="top-center"
      // theme="colored"
      style={{ width: "80%", maxWidth: "600px", zIndex: 9999 }}
    />
  );
}
