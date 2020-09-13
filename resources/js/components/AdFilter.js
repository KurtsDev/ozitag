import React from 'react';

const AdFilter = ({filter, setFilter}) => {
    return(

        <div className="card-body row">
            <div className="input-group col-lg-4">
                <input
                    name="room"
                    id="room"
                    type="number"
                    className="form-control"
                    placeholder="Количество комнат"
                    defaultValue={filter.room}
                    onChange={ (event) => {
                        setFilter({
                            ...filter,
                            room: event.target.value
                        });
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
                    defaultValue={filter.costMin}
                    onChange={ (event) => {
                        setFilter({
                            ...filter,
                            costMin: event.target.value
                        });
                    }}
                />
                <input
                    name="cost_max"
                    id="cost_max"
                    type="number"
                    className="form-control"
                    placeholder="Цена, до"
                    defaultValue={filter.costMax}
                    onChange={ (event) => {
                        setFilter({
                            ...filter,
                            costMax: event.target.value
                        });
                    }}
                />
            </div>
        </div>
    );

}

export default AdFilter;
