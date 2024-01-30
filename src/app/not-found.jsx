import Link from "next/link";
function NotFound() {
  // when an undefined url is use, this component will be showed to user

  return (
    <div>
      <h2>Not found!</h2>
      <p>Sorry, the page you are trying to reach does not exist</p>
      <Link href="/">Go back to home page.</Link>
    </div>
  );
}

export default NotFound;
