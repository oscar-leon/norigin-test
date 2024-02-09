import React from 'react';

import './Channel.css';

export type ChannelProps = {
    name: string
};

export const Channel = ({ name }: ChannelProps) => (
    <th className='channel'>
        {name}
    </th>
);
