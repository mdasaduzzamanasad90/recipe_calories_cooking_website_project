import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Item from "../Item/Item";
import Prepar from "../Prepar/Prepar";

const Main = () => {

    const [cookingitem , setcookingitem] = useState([]);
    const [orderitem,setorderitem] = useState([]);
    const [preparitem , setpreparitem] = useState([]);
    const [count , setcount] = useState(0);
    const [timecount , settimecount] = useState(0);


    const countfunc =(data)=>{
        const sum = count + data.preparing_time;
        setcount(sum);
    }
    const timecountfunc =(data)=>{
        const sum = timecount + data.calories;
        settimecount(sum);
    }


    const wanttocook = (data) => {
        const copydata = [...orderitem,data]
        setorderitem(copydata);
    }
    const preparingfunc = (data) => {
        const copydata = [...preparitem,data]
        setpreparitem(copydata);

        countfunc(data);
        timecountfunc(data);

    }

    useEffect(()=>{
        fetch('CookingData.json')
        .then(res => res.json())
        .then(data => setcookingitem(data))
    },[]);

    return (
        <div>
            <div className="text-center space-y-5 mt-10">
                <h1 className="font-bold text-3xl">Our Recipes</h1>
                <p className="font-medium text-[#00000080]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br />urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex gap-5">
                <div className="grid grid-cols-2 w-3/5 gap-5 my-10">
                    {
                        cookingitem.map((cookingcard) => (<Card key={cookingcard.recipe_id} cookingcard={cookingcard} wanttocook={wanttocook}></Card>))
                    }
                </div>
                <div className="my-10 w-2/5 text-center border rounded-xl">
                    <div>
                        <h1 className="text-xl font-bold border-b mx-16 py-5">Want to cook : {orderitem.length}</h1>
                        <table className="w-full my-3">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderitem.map((item,idx) => (<Item key={idx} item={item} preparingfunc={preparingfunc}></Item>))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold border-b mx-16 py-5">Currently cooking : {preparitem.length}</h1>
                        <table className="w-full my-3">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    preparitem.map((preparing,idx) => (<Prepar key={idx} preparing={preparing}></Prepar>))
                                }
                            </tbody>
                        </table>
                        <div>
                            <table className="w-full mt-5">
                                <tbody>
                                    <tr>
                                        <td className="font-bold">Total Time = {count} Min</td>
                                        <td className="font-bold">Total Calories = {timecount}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;