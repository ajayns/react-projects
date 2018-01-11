import React from 'react';

export const AddTrip = ({newTrip}) => {
    let date, place, type;
    const submit = (e) => {
        e.preventDefault();
        newTrip({
            date : date.value,
            place : place.value,
            type : type.value,
        });
        date = place = type = '';
    }

    return (
        <form onSubmit={submit} className="add-trip-form">
            <label>
                Date 
                <input 
                    id="date"
                    type="date"
                    required
                    ref={(input) => date = input} 
                />
            </label>
            <label>
                Place
                <input
                    id="date"
                    type="text"
                    required
                    ref={(input) => place = input} 
                />
            </label>
            <label>
                Type
                <select ref={(input) => type = input} >
                    <option value="Trek">Trek</option>
                    <option value="Tropic">Tropic</option>
                    <option value="Club">Club</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}