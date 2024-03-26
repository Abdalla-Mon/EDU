import ToastContainerLocal from "@/UiComponents/ToastContainerLocal/ToastContainerLocal";
import "react-toastify/dist/ReactToastify.css";

export function DisplayLoadingAndErrors({ loading }) {
  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 50,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
      )}
      <ToastContainerLocal />
    </>
  );
}
