import ResetPage from "./ResetPage";

export default function page({ searchParams }) {
  const { token } = searchParams;
  return <ResetPage token={token} />;
}
