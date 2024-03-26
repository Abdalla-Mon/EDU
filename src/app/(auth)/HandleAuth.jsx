"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function HandleAuth({ children }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.push("/dashboard/" + role.toLowerCase());
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
