require('./bootstrap');
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import AdNode from "./components/AdNode";
import AdFilter from "./components/AdFilter";

const App = () => {

    const [data, setData] = useState([]);
    const [room, setRoom] = useState('');
    const [cost, setCost] = useState({
        min: '',
        max: '',
    });

    // useEffect(() => {
    //     if (room) {
    //         let filterData = data.filter(function (item) {
    //             return item.rooms == room;
    //         })
    //         setFilterData(filterData);
    //     } else {
    //         setFilterData(data);
    //     }
    // }, [room])
    //
    // useEffect(() => {
    //
    // }, [cost])







    useEffect(() => {
        async function fetchData() {
            const ads = await axios('api/index',{});
            setData(ads.data);
        }
        fetchData();
    }, []);


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Парсим Реалтбай</div>

                        <AdFilter room={room} cost={cost} setRoom={setRoom} setCost={setCost}  />




                        {data.map(function (item) {
                            return(
                                <AdNode item={item} key={item.id} />
                            );
                        })}



                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
