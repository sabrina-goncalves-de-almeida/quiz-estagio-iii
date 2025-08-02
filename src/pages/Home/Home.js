import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <Link to={"/select-subject"}>Select Subject</Link>
    </>
  );
}

export default Home;
