"use client";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

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

        // console.log("ypp");
        
        toast(`${person} has been interacted with on ${newEntry.date}!`);
    };

    return (
        <TimelineContext.Provider value={{addInteraction, interactions}}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => useContext(TimelineContext);