require('./bootstrap');
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import AdNode from "./components/AdNode";
import AdFilter from "./components/AdFilter";

const App = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({
        room: '',
        costMin: '',
        costMax: '',
    });

    useEffect(() => {
        async function fetchData() {
            const ads = await axios.get('api/index',{
                params: {
                    filter,
                }
            });
            setData(ads.data);
        }
        fetchData();
    }, [filter]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Парсим Реалтбай</div>

                        <AdFilter filter={filter} setFilter={setFilter}/>

                        {data.map(function (item) {
                            return (
                                <AdNode item={item} key={item.id}/>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
