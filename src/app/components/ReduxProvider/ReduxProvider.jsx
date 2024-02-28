
"use client"
import {makeStore} from "@/lib/redux/store/store";
import {Provider} from "react-redux";

export default function ReduxProvider({ children }) {
    return(
          <Provider store={makeStore}>
                {children}
            </Provider>
          )
}