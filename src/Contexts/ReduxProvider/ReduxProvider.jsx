"use client";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/redux/store/store";

export default function ReduxProvider({ children }) {
  return <Provider store={makeStore}>{children}</Provider>;
}
