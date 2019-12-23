import React from 'react';

export const Dial = ({ degree = 45, ...props }) => {
    const ticks = []
    const radius = 5000;
    const tickRadius = 4500;
    const tickTranslate = 250;

    degree = degree > 90 ? 90 : degree;
    degree = degree < 0 ? 0 : degree;

    for (let i = 0; i <= 90; i += 7.5) {
        ticks.push(<circle r={20}
            cx={tickTranslate + Math.floor(tickRadius * Math.cos(i * Math.PI / 180))}
            cy={tickTranslate + Math.floor(tickRadius - tickRadius * Math.sin(i * Math.PI / 180))}
            key={i}
        />);
    }

    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${radius} ${radius}`} {...props}>
        <g transform="translate(0, -1000)">
            <g transform="rotate(-45, 2500, 2500)">
                <circle r={radius} cx="0" cy={radius} fill="white" />
                {ticks}
                <line x1={tickTranslate}
                    y1={radius - tickTranslate}
                    x2={tickTranslate + Math.floor(tickRadius * Math.cos(degree * Math.PI / 180))}
                    y2={tickTranslate + Math.floor(tickRadius - tickRadius * Math.sin(degree * Math.PI / 180))}
                    stroke="#000" strokeWidth={10} />
            </g>
        </g>
    </svg>;
};