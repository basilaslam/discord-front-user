import React from "react";
import { useState } from "react";
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const codingTopics = ["javascript", "react", "tailwindcss"];
const music = ["lofi", "pop", "rock", "hiphop"];
const voiceChannels = ["coding_doubts", "gaming"];

const ChannelBar = () => {
    return (
        <div className="channel-bar shadow-lg">
            <ChannelBlock />
            <div className="channel-container">
                <Dropdown header="coding_topics" selections={codingTopics} />
                <Dropdown header="music" selections={music} />
                <Dropdown header="voice_channels" selections={voiceChannels} />

            </div>
        </div>
    );
};

const ChannelBlock = () => {
    return (
        <div className="channel-block">
            <h5 className="channel-block-text">Channels</h5>
        </div>
    );
};

const Dropdown = ({ header, selections }:{header: string; selections:string[]}) => {
    const [expanded, setExpanded] = useState(true); 
    console.log(expanded)
    return (
        <div className="dropdown">
            <div onClick={() => {setExpanded(!expanded)}} className='dropdown-header'>
                <ChevronIcon expanded={expanded} />
                
                <h5
                    className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
                >
                    {header}
                </h5>
                <FaPlus size='12' className='text-accent my-auto ml-auto' />
            </div>
            {expanded&& selections &&
                selections.map((selection, index) => <TopicSelection key={index} selection={selection} />)}
        </div>
    );
};

const ChevronIcon = ({ expanded }:{expanded:boolean}) => {
    const chevClass = 'mr-1'; 
    return expanded ? (
        <FaChevronDown size='14' className={chevClass} />
    ) : (
        <FaChevronRight size='14' className={chevClass} />
    );
};

const TopicSelection = ({ selection }:{ selection:string }) => (
    <div className='dropdown-selection'>
        <BsHash size='24' className='text-gray-400' />
        <h5 className='dropdown-selection-text'>{selection}</h5>
    </div>
);

export default ChannelBar;