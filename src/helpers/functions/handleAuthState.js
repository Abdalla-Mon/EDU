import { setAuthState } from "../../lib/redux/slices/authSlice";

export default async function handleAuthState(
  dispatch,
  isLoggedIn,
  role,
  data,
  emailConfirmed,
) {
  dispatch(setAuthState({ isLoggedIn, role, data, emailConfirmed }));
}
