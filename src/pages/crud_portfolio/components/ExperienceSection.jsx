import { MdAdd } from "react-icons/md";

function ExperienceSection() {
    return (
        <section className='border-[1px] rounded-md shadow-lg w-full p-2 flex flex-col gap-2 justify-between'>
            <div className="flex flex-row justify-between items-center">
                <p>• Experiences</p>
                <button>
                    <MdAdd size={20} />
                </button>
            </div>
            <div className='w-full p-2 border-[1px]'>
                <div className="flex flex-col gap-2 justify-between items-center ">
                    <input className='w-full border-[1px] px-1' value={'Position'}></input>
                    <input className='w-full border-[1px] px-1' value={'Company name'}></input>
                    <input className='w-full border-[1px] px-1' value={'from-to'}></input>
                    <div className="w-full flex flex-row gap-2 ">
                        <input className='w-full border-[1px] px-1' value={'bullet points'}></input>
                        <button>
                            <MdAdd size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;