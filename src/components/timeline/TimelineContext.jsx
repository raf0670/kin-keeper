"use client";
import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [interactions, setInteractions] = useState([]);

    const addInteraction = (type, person) => {
        const newEntry = {
            "type": type,
            "person": person,
            "date": new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        }

        setInteractions([newEntry, ...interactions]);
    };

    return (
        <TimelineContext.Provider value={{addInteraction, interactions}}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => useContext(TimelineContext);