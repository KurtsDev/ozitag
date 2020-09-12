require('./bootstrap');
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import AdNode from "./components/AdNode";

const App = () => {

    const [data, setData] = useState([]);

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
