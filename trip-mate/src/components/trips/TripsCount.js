import React from 'react';
import TrekIcon from 'react-icons/lib/md/terrain';
import TropicIcon from 'react-icons/lib/md/wb-sunny';
import ClubIcon from 'react-icons/lib/fa/beer';

// Get percent completed
const getProgress = (total, goal) => {
    return Math.floor((total/goal)*100) + '%';
}

// Object of width of progress bar
const getProgressBarWidth = (width) => {
    return {width};
}

export const TripsCount = ({total, tropic, trek, club, goal=15}) => (
    <div className="trips-count">
        <div className="content">
            <div className="total"><h1>{total}</h1>trips</div>
            <div className="tropic"><h3>{tropic}</h3><TropicIcon /></div>
            <div className="trek"><h3>{trek}</h3><TrekIcon /></div>
            <div className="club"><h3>{club}</h3><ClubIcon /></div>
            <div className="goal"><div className="progress" style={getProgressBarWidth(getProgress(total,goal))}></div> {getProgress(total, goal)}</div>
        </div>
    </div>
)

