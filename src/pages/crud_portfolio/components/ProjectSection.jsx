import { MdAdd } from "react-icons/md";

function ProjectSection() {
    return (
        <section className='border-[1px] rounded-md shadow-lg w-full p-2 flex flex-col gap-2'>
            <div className="flex flex-row justify-between items-center">
                <p>• Projects</p>
                <button>
                    <MdAdd size={20} />
                </button>
            </div>
            <ProjectCard />
        </section>
    )
}

export default ProjectSection;

function ProjectCard() {
    return (
        <div className='border-[1px] rounded-md p-2 flex flex-col justify-between gap-2'>
            <input className="border-[1px] px-1" type="text" value={'Project 1'} />
            <input className="border-[1px] px-1" type="text" value={'Javascript | React | tailwind'} />
            <input className="border-[1px] px-1" type="text" value={'Url'} />
        </div>
    )
}