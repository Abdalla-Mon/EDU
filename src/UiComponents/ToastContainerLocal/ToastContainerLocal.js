import { ToastContainer } from "react-toastify";

export default function ToastContainerLocal() {
  return (
    <ToastContainer
      position="top-center"
      theme="dark"
      style={{ width: "80%", maxWidth: "600px", zIndex: 9999 }}
    />
  );
}
