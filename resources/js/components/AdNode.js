import React from 'react';

const AdNode = ({item}) => {
    return (
        <div style={{borderBottom: '2px solid black'}} className="card-body row">
            <div className="col-lg-3">
                <img src={item.image}/>

            </div>
            <div className="col-lg-9">
                <p>{item.title}</p>
                <p>{item.cost} руб./сут.</p>
                <p>{item.phone}</p>
                <p>{item.rooms}</p>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export default AdNode;
