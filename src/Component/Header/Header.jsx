import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import '../Header/Header.css';

const Header = () => {

    const explorefunc =()=>{

        const explorebutton = document.getElementById('explorebutton');
        explorebutton.classList.add('bg-[#0BE58A]')
        explorebutton.classList.add('text-black')
        explorebutton.classList.remove('border')


        const feedbackbutton = document.getElementById('feedbackbutton');
        feedbackbutton.classList.remove('bg-[#0BE58A]')
        feedbackbutton.classList.remove('text-black')
        feedbackbutton.classList.add('border')

    }
    const feedbackfunc =()=>{

        const feedbackbutton = document.getElementById('feedbackbutton');
        feedbackbutton.classList.add('bg-[#0BE58A]')
        feedbackbutton.classList.add('text-black')
        feedbackbutton.classList.remove('border')


        const explorebutton = document.getElementById('explorebutton');
        explorebutton.classList.remove('bg-[#0BE58A]')
        explorebutton.classList.remove('text-black')
        explorebutton.classList.add('border')
    }


    return (
        <div>
            <nav className="flex justify-between items-center my-10">
                <h1 className="font-bold text-3xl">Recipe Calories</h1>
                <ul className="flex gap-5 font-bold text-lg text-[#00000066]">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
                <div className="flex items-center gap-5">
                    <div className="flex border rounded-lg gap-2 px-4 py-1 items-center">
                        <GoSearch></GoSearch>
                        <input className="py-1 px-2" type="text" name="" id="" placeholder="Search" />
                    </div>
                    <CgProfile size={30} className="text-[#0BE58A]"></CgProfile>
                </div>
            </nav>
            <header className="text-center space-y-7 bgimg hight rounded-3xl text-white pt-48 ">
                <h1 className="font-bold text-5xl">Discover an exceptional cooking <br />class tailored for you!</h1>
                <p className="font-medium text-[#FFFFFFCC]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex justify-center gap-5">
                    <button onClick={explorefunc} id="explorebutton" className=" w-40 py-1 rounded-lg font-bold text-lg bg-[#0BE58A] text-black">Explore Now</button>
                    <button onClick={feedbackfunc} id="feedbackbutton" className="border w-40 py-1 rounded-lg font-bold text-lg">Our Feedback</button>
                </div>
            </header>
        </div>
    );
};

export default Header;