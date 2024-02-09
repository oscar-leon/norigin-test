import React, { useState, useEffect, useCallback } from 'react';

import { HomeTopBar } from '../components/layout'
import { getTomorrow } from '../helpers';
import { fetchEpg } from '../services';
import { ChannelItem } from '../types';
import { EPG } from '../components/epg/Epg';


export function Home() {
    const [channels, setChannels] = useState<ChannelItem[]>();

    console.log('aaa')

    const handleFetchChannels = useCallback(async () => {
        const fetchedChannels = await fetchEpg();

        console.log("aaa", fetchedChannels)
    
        setChannels(fetchedChannels)
    }, []);

    useEffect(() => {
        handleFetchChannels();
    }, [])

    if (!channels) {
        return null
    }

    console.log('bb');
    

    return (
        <>
            <HomeTopBar />
            <EPG start={new Date()} end={getTomorrow()} channels={channels} />
        </>
    );
}
