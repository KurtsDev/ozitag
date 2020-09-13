import React from 'react';

const AdFilter = ({room, cost, setRoom, setCost}) => {
    return(

        <div className="card-body row">
            <div className="input-group col-lg-4">
                <input
                    name="room"
                    id="room"
                    type="number"
                    className="form-control"
                    placeholder="Количество комнат"
                    defaultValue={room}
                    onChange={ (event) => {
                       setRoom(event.target.value);
                    }}
                />
            </div>
            <div className=" input-group col-lg-8">
                <input
                    name="cost_min"
                    id="cost_min"
                    type="number"
                    className="form-control"
                    placeholder="Цена, от"
                    defaultValue={cost.min}
                    onChange={ (event) => {
                        setCost({
                            min: event.target.value
                        });
                    }}
                />
                <input
                    name="cost_max"
                    id="cost_max"
                    type="number"
                    className="form-control"
                    placeholder="Цена, до"
                    defaultValue={cost.max}
                    onChange={ (event) => {
                        setCost({
                            max: event.target.value
                        });
                    }}
                />
            </div>
        </div>
    );

}

export default AdFilter;
