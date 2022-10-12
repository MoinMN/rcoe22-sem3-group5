import React from 'react'
import { useContext } from 'react';
import NewsContext from '../context/NewsContext';

const Navbar = () => {
    const context = useContext(NewsContext);
    const { category, country, setCategory, setCountry, updateNews } = context;

    const handleSelect = (e) => {
        console.log(e.target.value);
        setCountry(e.target.value);
    }

    const options = [
        { value: 'in', text: 'India' },
        { value: 'us', text: 'USA' },
        { value: 'ca', text: 'Canada' },
        { value: 'jp', text: 'Japan' },
        { value: 'de', text: 'Germany' },
        { value: 'gb', text: 'United Kingdom' },
        { value: 'ua', text: 'Ukraine' },
    ];

    return (
        <div className='sticky top-0 z-50'>
            <header className="text-white body-font bg-slate-600">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <h1 className='font-bold text-4xl '>NEWS HUNTER</h1>
                    <nav className="md:ml-auto md:mr-auto md:text-xl flex flex-wrap items-center text-base justify-center">
                        <a onClick={() => { setCategory('General') }} className="mr-5 cursor-pointer hover:text-gray-900">General</a>
                        <a onClick={() => { setCategory('Business') }} className="mr-5 cursor-pointer hover:text-gray-900">Business</a>
                        <a onClick={() => { setCategory('Sports') }} className="mr-5 cursor-pointer hover:text-gray-900">Sports</a>
                        <a onClick={() => { setCategory('Health') }} className="mr-5 cursor-pointer hover:text-gray-900">Health</a>
                        <a onClick={() => { setCategory('Entertainment') }} className="mr-5 cursor-pointer hover:text-gray-900">Entertainment</a>
                        <a onClick={() => { setCategory('Science') }} className="mr-5 cursor-pointer hover:text-gray-900">Science</a>
                        <a onClick={() => { setCategory('Technology') }} className="mr-5 cursor-pointer hover:text-gray-900">Technology</a>
                    </nav>


                    {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label> */}
                    <select onChange={handleSelect} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-2 w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>


                    <form className="flex items-center" >
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="keyword" name='keyword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search keywords" required="" />
                        </div>
                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>

                </div>
            </header>
        </div>
    )
}

export default Navbar