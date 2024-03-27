"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function HandleAuth({ children }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const auth = useSelector((state) => state.auth);
  console.log(auth, "auth");
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);
  return <>{children}</>;
}
