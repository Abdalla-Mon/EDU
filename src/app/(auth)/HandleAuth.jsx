"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function HandleAuth({ children }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/" + role.toLowerCase());
  }, [isLoggedIn]);
  return (
    <>
      {!isLoggedIn && (
        <div className="bg-white fixed top-0 left-0 w-full h-full z-50 centerd auth_layout">
          {children}
        </div>
      )}
    </>
  );
}
