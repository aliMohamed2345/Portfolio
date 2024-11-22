import Image, { StaticImageData } from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6"
import { FaHome, FaUser, FaPhone } from "react-icons/fa";
import { BsBackpack4Fill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { ReactNode } from "react";
import  Fzakerr from '../../../public/Fzakerr App.jpg'
import  Calculator  from '../../../public/Basic Calculator.jpg'
import  Translator  from '../../../public/BasicTranslator.jpg'
import  ColorFlipper  from '../../../public/Color Flipper.jpg'
import  FirstTemplate  from '../../../public/First Template.jpg'
import  SecondTemplate from '../../../public/Second Template.jpg'
import  LoginPage  from '../../../public/Login Page.jpg'
import  StopWatch  from '../../../public/StopWatch.jpg'
import  TicTacToeGame  from '../../../public/Tic Tac Toe Game.jpg'
import  ClipBoardLandingPage  from '../../../public/clipboard-landing-page-front-end-mentor.jpg'
import  SocialLinksProfile  from '../../../public/social-links-profile-front-end-mentor.jpg'
import  ToDoList  from '../../../public/To-Do List.jpg'
const IconSizes = { width: 50, height: 50 }
export interface SocialMediaProps {
    name: string,
    link: string,
    logo: ReactNode,
    Email?: string
}
export const SocialMedia: SocialMediaProps[] = [{
    logo: <FaFacebook />,
    link: `https://www.facebook.com/profile.php?id=100057533161427`,
    name: `facebook`
},
{
    logo: <BiLogoGmail />,
    name: `Gmail`,
    Email: `eloymohamedalimansor@gmail.com`,
    link: `https://mail.google.com/mail/u/0/#inbox`
},
{
    logo: <FaGithub />,
    name: `Github`,
    link: `https://github.com/aliMohamed2345/`
},
{
    logo: <FaLinkedinIn />,
    name: `LinkedIn`,
    link: `https://www.linkedin.com/in/ali-mohamed-mansor-204a44296/`
}
]
export interface OptionsProps {
    name: string,
    logo: ReactNode
}
export const Options: OptionsProps[] = [
    { name: `Home`, logo: <FaHome /> },
    { name: `About`, logo: <FaUser /> },
    { name: `Skills`, logo: <BiSolidCategory /> },
    { name: `portfolio`, logo: <BsBackpack4Fill /> },
    { name: `Contact`, logo: <FaPhone /> }
]
export interface SkillsProps {
    name: string,
    icon: ReactNode
}
export const SkillsIcons: SkillsProps[] = [
    {
        name: `HTML`,
        icon: <Image alt="HTML" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
    },
    {
        name: `CSS`,
        icon: <Image alt="CSS" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
    },
    {
        name: `JavaScript`,
        icon: <Image alt="JavaScript" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    },
    {
        name: `TypeScript`,
        icon: <Image alt="TypeScript" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    },
    {
        name: `BootStrap`,
        icon: <Image alt="BootStrap" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
    },
    {
        name: `Tailwind`,
        icon: <Image alt="Tailwind" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
    },
    {
        name: `SASS`,
        icon: <Image alt="SASS" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
    },
    {
        name: `React`,
        icon: <Image alt="React" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    },
    {
        name: `Next`,
        icon: <Image alt="Next" className="icon z-3 bg-white rounded-2 p-1 " width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
    },
    {
        name: `Redux`,
        icon: <Image alt="Redux" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
    },
    {
        name: `Figma`,
        icon: <Image alt="Figma" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
    },
    {
        name: `GitHub`,
        icon: <Image alt="GitHub" className="icon z-3 bg-white rounded-2 p-1" width={IconSizes.width} height={IconSizes.height} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
    },
]
export interface ProjectsProps {
    ProjectImageSrc: StaticImageData,
    class: string,
    ProjectName: string,
    githubRepo: string,
    DemoLink: string,
}

export const Projects: ProjectsProps[] = [
    {
        ProjectName: "Fazkerr App",
        class: "React",
        DemoLink: "https://fazaker-app-gm8y.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/fazaker-App",
        ProjectImageSrc: Fzakerr
    },
    {
        ProjectName: "Basic Calculator",
        class: "JS",
        DemoLink: "https://simple-calculator-azure-ten.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/simple-calculator",
        ProjectImageSrc: Calculator
    },
    {
        ProjectName: "First Template",
        class: "HTML|CSS",
        DemoLink: "https://first-template-five.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/first-template",
        ProjectImageSrc: FirstTemplate
    }, {
        ProjectName: "Second Template",
        class: "HTML|CSS",
        DemoLink: "https://second-template-lyart.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/second-template",
        ProjectImageSrc: SecondTemplate
    },
    {
        ProjectName: "Tic Tac Toe Game",
        class: "JS",
        DemoLink: "https://tic-tac-toe-game-eta-nine.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/tic-tac-toe-Game-",
        ProjectImageSrc: TicTacToeGame
    },
    {
        ProjectName: "Login Page",
        class: "HTML|CSS",
        DemoLink: "https://login-page-tau-five.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/login-page-",
        ProjectImageSrc: LoginPage
    },
    {
        ProjectName: "Basic Translator",
        class: "JS",
        DemoLink: "https://basic-translator-3rci47y0x-alimohamed2345s-projects.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/basic-translator-app",
        ProjectImageSrc: Translator
    },
    {
        ProjectName: "To Do List",
        class: "JS",
        DemoLink: "https://to-do-list-app-one-inky.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/To-Do-List-app",
        ProjectImageSrc: ToDoList
    },
    {
        ProjectName: "Color Flipper",
        class: "JS",
        DemoLink: "https://color-flipper-delta-teal.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/Color-Flipper",
        ProjectImageSrc: ColorFlipper
    },
    {
        ProjectName: "Stop Watch",
        class: "JS",
        DemoLink: "https://stop-watch-sigma-five.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/Stop-Watch-",
        ProjectImageSrc: StopWatch
    },
    {
        ProjectName: "ClipBoard Landing Page",
        class: "HTML|CSS",
        DemoLink: "https://clipboard-landing-page-front-end-mentor-two.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/Clipboard-Landing-Page-front-end-mentor-",
        ProjectImageSrc: ClipBoardLandingPage
    },
    {
        ProjectName: "Social Links Profile",
        class: "HTML|CSS",
        DemoLink: "https://social-links-profile-front-end-mentor-1.vercel.app/",
        githubRepo: "https://github.com/aliMohamed2345/Social-Links-Profile-front-end-mentor-",
        ProjectImageSrc: SocialLinksProfile
    },
]