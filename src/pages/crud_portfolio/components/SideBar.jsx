import { GoSidebarExpand } from "react-icons/go";
import { MdAdd } from "react-icons/md";

function SideBar({ isSideBar, setIsSideBar }) {

    const sections = [
        {
            id: 1,
            title: 'Project Section',
        },
        {
            id: 2,
            title: 'Follow Me Section',
        },
        {
            id: 3,
            title: 'Skills Section',
        },
        {
            id: 4,
            title: 'Testimonials Section',
        },
        {
            id: 5,
            title: 'Experience Section',
        },

    ]
    return <aside className="absolute w-[400px] p-2 left-0 top-0 bottom-0 bg-slate-300 flex flex-col gap-4">
        <button className='self-end ' onClick={() => setIsSideBar(!isSideBar)}>
            <GoSidebarExpand size={30} />
        </button>
        <div className='flex flex-col gap-2'>
            {sections.map((item) => {
                return <div key={item.id} className='flex flex-row justify-between items-center'>
                    <p>{item.title}</p>
                    <button>
                        <MdAdd size={32} />
                    </button>
                </div>
            })}
        </div>
    </aside >
}

export default SideBar