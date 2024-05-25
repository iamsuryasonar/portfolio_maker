import { MdAdd } from "react-icons/md";

function SkillsSection() {
    return (
        <section className='border-[1px] rounded-md shadow-lg w-full p-2 flex flex-col gap-2 justify-between'>
            <div className="flex flex-row justify-between items-center">
                <p>• Skills</p>
                <button>
                    <MdAdd size={20} />
                </button>
            </div>
            <div className='p-2 flex flex-row gap-2 justify-between items-center border-[1px]'>
                <input className='w-full border-[1px] px-1' value={'Url'}></input>
                <button>
                    <MdAdd size={20} />
                </button>
            </div>
        </section>
    )
}

export default SkillsSection;