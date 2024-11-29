'use client'
import { Projects, ProjectsProps } from '../utils/Objects';
import { useEffect, useState } from 'react';
import { FaGithub, FaRegEye } from "react-icons/fa";
import Image from 'next/image'
const Portfolio = () => {
    const [tabValue, setTabValue] = useState<string>("All")
    const [Skills, setSkills] = useState<ProjectsProps[]>([])
    //useEffect for updating the skills depend on the selected tab
    useEffect(() => {
        const filteredSkills = tabValue === "All"
            ? Projects
            : Projects.filter(project => project.class === tabValue);
        setSkills(filteredSkills)
    }, [tabValue])
    return (
        <>
            <div className="portfolio-section m-3 rounded-1 overflow-y-auto overflow-x-hidden ">
                <div className="tab-values">
                    <button type="button" onClick={() => setTabValue("All")} className={`p-3 ${tabValue === 'All' ? `active` : ``} border-0 w-25`}>All</button>
                    <button type="button" onClick={() => setTabValue("React")} className={`p-3 ${tabValue === 'React' ? `active` : ``} border-0 w-25`}>React</button>
                    <button type="button" onClick={() => setTabValue("JS")} className={`p-3 ${tabValue === 'JS' ? `active` : ``} border-0 w-25`}>JS</button>
                    <button type="button" onClick={() => setTabValue("HTML|CSS")} className={`p-3 ${tabValue === 'HTML|CSS' ? `active` : ``} border-0 w-25`}>HTML|CSS</button>
                </div>

                <div className='skills d-flex  flex-wrap gap-4 text-center py-5  justify-content-center align-items-center'>
                    {Skills.map((project, i) => (
                        <div key={i} className='skill rounded-4  overflow-hidden position-relative'>
                            <Image objectFit='cover' className='w-100  ' src={project.ProjectImageSrc} alt={project.ProjectName} width={200} height={200} />
                            <div className="more-info position-absolute top-0 start-0 d-flex justify-content-center align-items-center  ">
                                <div className="icons d-flex justify-content-center align-items-center bg-black  rounded-3 gap-1 fs-2">
                                    <a className="rounded-1" title="Open Github Repo" href={project.githubRepo} target="__blank">
                                        <FaGithub />
                                    </a>
                                    <a className="rounded-1" title="view Demo" href={project.DemoLink} target="__blank">
                                        <FaRegEye />
                                    </a>
                                </div>
                            </div>
                            <p className='my-2'>{project.ProjectName}</p>
                        </div>
                    ))}
                </div>
            </div >
        </>);
}

export default Portfolio;