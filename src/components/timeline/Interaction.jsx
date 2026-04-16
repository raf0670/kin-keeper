import React from 'react';
import call from "../../assets/call.png";
import text from "../../assets/text.png";
import video from "../../assets/video.png";
import Image from 'next/image';

const interactionImage = {
    "Call": call,
    "Text": text,
    "Video": video
};

const Interaction = ({ interaction }) => {
    // console.log(interaction);
    
    return (
        <div className='w-full bg-white rounded-md shadow-sm p-4 flex gap-4'>
            <Image src={interactionImage[interaction.type]} alt=''></Image>
            <div>
                <p className='text-gray-400'><span className='text-md text-black font-semibold'>{interaction.type}</span> with {interaction.person}</p>
                <p className='text-gray-500'>{interaction.date}</p>
            </div>
        </div>
    );
};

export default Interaction;