
import { SocialMedia, Options, OptionsProps, SocialMediaProps } from "../utils/Objects";
import portfolioPic from './../../../public/PortfolioImage.jpg'
import Image from 'next/image';


const SideBar = () => {
    return (<>
        <div className=" rounded-3 text-center overflow-x-hidden  side-bar d-flex flex-column align-items-center d-none d-sm-block d-md-block position-fixed start-0 h-100">
            <div>
                <Image alt={`pic`} className='rounded-3 my-3' width={160} height={160} objectFit='cover' src={portfolioPic}></Image>
                <h1 className=" fw-bold">Ali Mansor</h1>
                <p className="text-info">front-end developer</p>
            </div>
            <div className="d-flex align-items-center gap-3 justify-content-center mt-2 text-info">
                {SocialMedia.map((social: SocialMediaProps, i: number) => (
                    <a className="social fs-3" key={i} target="__blink" href={social.link} >{social.logo}</a>
                ))}
            </div>
            <div className="separator mt-4"></div>
            <div className="d-flex options justify-content-between flex-column">
                {Options.map((option: OptionsProps, i: number) => (
                    <>
                        <a href={`#${option.name.toLowerCase()}`} key={i} className="p-3 d-flex option  align-items-center justify-content-between  "  >
                            <p>{option.name}</p>
                            <p >{option.logo}</p>
                        </a>
                        <div className="separator"></div>
                    </>
                ))}
            </div>
            <button className="p-3  rounded-pill text-bold my-5 text-capitalize border-0">Download CV</button>
        </div >
    </>);
}

export default SideBar;