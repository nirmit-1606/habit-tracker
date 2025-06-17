import React from 'react';

const FREQUENCY = {
    daily: '#008019',
    weekly: '#8338EC',
    monthly: '#FF9F1C', // optional fallback
};

const FrequencyChip = ({ frequency }) => {
    const freqKey = frequency.toLowerCase();
    const color = FREQUENCY[freqKey] || '#666'; // fallback color

    return (
        <div
            className="inline-block self-start px-3 py-1 text-sm text-white rounded-full capitalize"
            style={{ backgroundColor: color }}
        >
            {frequency}
        </div>
    );
}

export default FrequencyChip;