import { SocialMedia, Options, OptionsProps, SocialMediaProps } from "../utils/Objects";
import portfolioPic from './../../../public/PortfolioImage.jpg';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";
interface SideBarProps {
    isOpen: boolean;
    toggleMenu: () => void; // Function to handle toggling state
}

const SideBar = ({ isOpen, toggleMenu }: SideBarProps) => {
    return (
        <div
            className={`rounded-3 text-center overflow-x-hidden side-bar d-flex flex-column align-items-center position-fixed ${isOpen ? `start-0` : `active`} h-100`}>
            <button
                onClick={toggleMenu}
                type="button"
                title="close"
                className="close-btn d-block m-2 text-white fs-2 text-start align-self-start border-white bg-transparent rounded-2 d-flex align-items-center justify-content-center"
            >
                <IoClose />
            </button>
            <div className="mt-3">
                <Image
                    alt={`pic`}
                    className="rounded-3 my-3"
                    width={160}
                    height={160}
                    objectFit="cover"
                    src={portfolioPic}
                />
                <h1 className="fw-bold">Ali Mansor</h1>
                <p className="text-info">Front-end Developer</p>
            </div>
            <div className="d-flex align-items-center gap-3 justify-content-center mt-2 text-info">
                {SocialMedia.map((social: SocialMediaProps, i: number) => (
                    <a
                        className="social d-flex align-items-center justify-content-center rounded-1"
                        key={i}
                        target="__blank"
                        href={social.link}
                    >
                        {social.logo}
                    </a>
                ))}
            </div>
            <div className="d-flex options justify-content-between flex-column border border-white rounded-3 mt-5">
                {Options.map((option: OptionsProps, i: number) => (
                    <div key={i}>
                        <a
                            href={`#${option.name.toLowerCase()}`}
                            className="p-3 d-flex option align-items-center justify-content-between rounded-3 "
                        >
                            <p>{option.name}</p>
                            <p>{option.logo}</p>
                        </a>
                        {i +1 < Options.length &&
                            <div className="separator"></div>
                        }
                    </div>
                ))}
            </div>
            <button className="p-2 btn rounded-pill my-5 position-relative overflow-hidden button text-white">
                Download CV
            </button>
        </div>
    );
};

export default SideBar;
