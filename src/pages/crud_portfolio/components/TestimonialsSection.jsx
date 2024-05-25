import { MdAdd } from "react-icons/md";

function TestimonialsSection() {
    return (
        <section className='border-[1px] rounded-md shadow-lg w-full p-2 flex flex-col gap-2 justify-between'>
            <div className="flex flex-row justify-between items-center">
                <p>• Testimonials</p>
                <button>
                    <MdAdd size={20} />
                </button>
            </div>
            <div className='p-2 flex flex-row gap-2 justify-between items-center border-[1px]'>
                <div className="flex flex-col gap-2 justify-between items-center ">
                    <input type="file" />
                    <input className='w-full border-[1px] px-1' value={'Name'}></input>
                    <input className='w-full border-[1px] px-1' value={'Position'}></input>
                    <textarea className='w-full border-[1px] px-1' value={'Testimonial'}></textarea>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;