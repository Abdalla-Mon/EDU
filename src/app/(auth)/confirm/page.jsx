import ConfirmationPage from "./ConfirmationPage";

export default function page({ searchParams }) {
  const { token } = searchParams;
  return <ConfirmationPage token={token} />;
}
