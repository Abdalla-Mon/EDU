import HandleAuth from "./HandleAuth";

export default function AuthLayout({ children }) {
  return (
    <HandleAuth>
      <div
        className={
          "min-h-screen flex justify-center items-center bg-gray-50 p-3"
        }
      >
        {children}
      </div>
    </HandleAuth>
  );
}
