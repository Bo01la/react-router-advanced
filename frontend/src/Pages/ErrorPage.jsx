import { Link } from "react-router-dom";

export default function Errorpage() {
  return (
    <>
      <h1>An error happend</h1>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
