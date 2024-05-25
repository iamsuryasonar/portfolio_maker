import { useState } from 'react'
import { GoSidebarCollapse } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import SideBar from './components/SideBar';
import ProjectSection from './components/ProjectSection';
import FollowMeSection from './components/FollowMeSection'
import SkillsSection from './components/SkillsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ExperienceSection from './components/ExperienceSection'

function CrudPortFolio() {
    const [isSideBar, setIsSideBar] = useState(false)

    return <div className="relative flex flex-row justify-center">
        {!isSideBar &&
            <button className='absolute left-0 top-0 self-end p-2' onClick={() => setIsSideBar(!isSideBar)}>
                <GoSidebarCollapse size={30} />
            </button>
        }
        {isSideBar &&
            <SideBar isSideBar={isSideBar} setIsSideBar={setIsSideBar} />
        }
        <div className="min-h-svh py-10 flex flex-col items-center gap-4 bg-slate-50">
            <img className="w-[50px] h-[50px] rounded-full" src='https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg' />
            <p className='w-full'>I'm <input className='border-[1px] px-1' value={'John Doe'}></input></p>
            <textarea className='w-full border-[1px] px-1' value={'Lorem ipsum dolor sit amet consectetur adipisicing elit. '}></textarea>
            <IoLocationSharp size={30} />
            <input className='w-full border-[1px] px-1' value={'Location'}></input>
            <ProjectSection />
            <FollowMeSection />
            <SkillsSection />
            <TestimonialsSection />
            <ExperienceSection />
        </div>
    </div >
}

export default CrudPortFolio;


