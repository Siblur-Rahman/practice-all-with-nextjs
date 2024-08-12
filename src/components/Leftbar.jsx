import DataFetchinglinks from "@/app/(datafetching)/DataFetchinglinks";


const Leftbar = () => {
    return (
        <nav className='bg-slate-200 h-screen fixed w-[15%] top-10 left-0'>
            <ul className="flex-col">
            <DataFetchinglinks/>
            </ul>
        </nav>

    );
};

export default Leftbar;