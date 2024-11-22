import portfolioPic from './../../../public/PortfolioImage.jpg'

import Image from "next/image";
const Home = () => {
    return (<>
        <div id="home" className="home d-flex flex-column flex-sm-row-reverse flex-md-row-reverse  p-2 align-items-center justify-content-between">
            <Image alt={`pic`} className='rounded-3 my-3' width={260} height={260} objectFit='cover' src={portfolioPic}></Image>
            <div className="text-center text-sm-start text-md-start" >
                <p className=" text-white">Hello, I&apos;Am</p>
                <p className="name text-info">Ali Mansor</p>
                <p className=" text-white">front end developer</p>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column flex-md-row flex-sm-row gap-2 my-3">
            <button className="p-3  d-block  rounded-pill text-bold my-1 text-capitalize border-0">Download CV</button>
            <button className="p-3  d-block  rounded-pill text-bold my-1 text-capitalize border-0">Contact Me</button>
        </div>

    </>)
}
export default Home;