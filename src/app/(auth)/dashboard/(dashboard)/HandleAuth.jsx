"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function HandleAuth({ children }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const router = useRouter();
  console.log(isLoggedIn, role);
  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);
  return <>{children}</>;
}
