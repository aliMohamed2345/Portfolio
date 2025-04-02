import { handleDownloadCV } from "../utils/handleDownloadCV";
import portfolioPic from "./../../../public/PortfolioImage.jpg";
// import portfolio from './../../../public/'
import Image from "next/image";
const Home = () => {
  return (
    <>
      <div
        id="home"
        className="home d-flex flex-column flex-sm-row-reverse flex-md-row-reverse  p-2 align-items-center justify-content-between"
      >
        <Image
          alt={`pic`}
          className="rounded-3 my-3"
          width={260}
          height={260}
          objectFit="cover"
          src={portfolioPic}
        ></Image>
        <div className="text-center text-sm-start text-md-start">
          <p className=" text-white">Hello, I&apos;Am</p>
          <p className="name text-info">Ali Mansor</p>
          <p className=" text-white">front end developer</p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column flex-md-row flex-sm-row gap-2 my-3">
        <button
          onClick={() =>
            handleDownloadCV(
              `/Ali Mohamed Ali Mansor - Front End Developer.pdf`,
              `Ali Mohamed Ali Mansor - Front End Developer.pdf`
            )
          }
          className="p-3 btn rounded-pill my-5 position-relative overflow-hidden button text-white"
        >
          Download CV
        </button>
      </div>
    </>
  );
};
export default Home;
