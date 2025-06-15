import React from 'react';

const HabitListItem = ({ habit }) => {
    return (
        <div className={`${habit.cardColor || 'bg-cyan-300'} overflow-hidden rounded-2xl pl-3 hover:pl-4 transition-all duration-[400ms] shadow-[0_4px_8px_rgba(0,0,0,0.25)]`}>
            <div className="flex bg-[var(--bg-secondary)] hover:rounded-l-xl transition-all duration-[400ms] hover:shadow-[-2px_0_8px_rgba(0,0,0,0.25)]">
                {/* Content */}
                <div className="flex-1 p-3 flex flex-col justify-between gap-3">
                    <div className="flex gap-4 items-start">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">{habit.name}</h3>
                        <span className="inline-block px-3 py-1 text-base text-white bg-green-700 rounded-full">
                            {habit.frequency}
                        </span>
                    </div>
                    <p className="text-[var(--text-primary)] text-base">{habit.description}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pr-4">
                    <button className="secondary border text-base px-4 py-1">Edit</button>
                    <button className="secondary border text-base px-4 py-1">Deprecate</button>
                </div>
            </div>
        </div>
    );
};

export default HabitListItem;
