import React from 'react';

// Get percent completed
const getProgress = (total, goal) => {
    return (total/goal)*100 + '%';
}

export const TripsCount = ({total, tropic, trek, club, goal=50}) => (
    <div className="trips-count">
        <div className="total">total {total}</div>
        <div className="tropic">tropic {tropic}</div>
        <div className="trek">trek {trek}</div>
        <div className="club">club {club}</div>
        <div className="goal">progress {getProgress(total, goal)}</div>
    </div>
)

