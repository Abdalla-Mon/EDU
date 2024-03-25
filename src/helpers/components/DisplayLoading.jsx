import { IoCloseCircleOutline } from "react-icons/io5";

export function DisplayLoadingAndErrors({
  loading,
  submitMessage,
  setSubmitMessage,
  text = "Loading...",
}) {
  return (
    <>
      {loading && (
        <div
          className={
            "fixed flex justify-center items-center font-bold right-0 top-0 z-[50000] w-full h-full"
          }
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "#ffffff57",
            fontSize: "3rem",
          }}
        >
          {text}
        </div>
      )}
      {submitMessage && (
        <div
          className=" flex justify-center items-center   z-[50000]  fixed  "
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "#ffffff",
            top: "20px",
            left: "20px",
            fontSize: "1.5rem",
            minWidth: "200px",
            borderRadius: "10px",
            border: "2px solid var(--color_primary)",
            padding: "10px",
          }}
        >
          {submitMessage}
          <button
            className={" absolute rounded-[50%]"}
            style={{
              top: "-10px",
              right: "-10px",
              backgroundColor: "var(--color_primary)",
              textColor: "white",
            }}
            onClick={() => {
              setSubmitMessage("");
            }}
          >
            <IoCloseCircleOutline className={"text-white"} />
          </button>
        </div>
      )}
    </>
  );
}
