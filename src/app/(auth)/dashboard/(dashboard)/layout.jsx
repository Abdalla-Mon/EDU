import HandleAuth from "./HandleAuth";

export default function Layout({ children }) {
  return (
    <HandleAuth>
      <div className={""}>{children}</div>
    </HandleAuth>
  );
}
