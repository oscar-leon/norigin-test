import { useEffect, useRef, useMemo } from 'react';
import { TimeDisplayCell } from '@repo/ui/components/timeDisplayCell/TimeDisplayCell';
import { getColSpan, getEPGRange } from '../../helpers';
import { ChannelItem } from '../../types/ChannelItem';

import { Timeline } from '../Timeline';
import { Channel } from '../channel/Channel';

import './Epg.css';

export type EPGProps = {
  start: Date | number,
  end: Date | number,
  minutes?: Array<number>,
  channels: ChannelItem[],
};

export const EPG = ({
    start,
    end,
    channels,
}: EPGProps) => {
    const epgContainerRef = useRef<HTMLDivElement>(null);
    const currentTimeIndicatorRef = useRef<HTMLDivElement>(null);

    const range = useMemo(() => getEPGRange(start, end, channels), [start, end, channels]);
    const colSpan = useMemo(() => getColSpan(range.start, range.end), [range]);

    const cells = useMemo(() => {
        return Array.from({ length: colSpan + 1 }, (_, i) => {
            const time = ((range.end - range.start) * (i / colSpan)) + range.start;
            return (
                <TimeDisplayCell
                    key={`${i}-${time}`}
                    currentTimeIndicatorRef={currentTimeIndicatorRef}
                    time={time}
                />
            );
        });
    }, [colSpan, range, currentTimeIndicatorRef]);

    const renderedTimelines = useMemo(() => {
        return channels.map(channel => (
            <Timeline
                key={channel.id}
                schedules={channel.schedules}
                channel={<Channel name={channel.title} />}
                range={range}
            />
        ));
    }, [channels, range]);

    const scrollToNow = () => {
        if (currentTimeIndicatorRef.current && epgContainerRef.current) {
            const currentTimeIndicatorCoordinates = currentTimeIndicatorRef.current.getBoundingClientRect();
            epgContainerRef.current.scrollLeft += (currentTimeIndicatorCoordinates.left - 200);
        }
    };

    useEffect(() => {
        scrollToNow();
    }, []);

    console.log('epg');
    

    return (
        <div ref={epgContainerRef} className='epgContainer'>
            <table className='epgTable'>
                <thead>
                    <tr>{cells}</tr>
                </thead>
                <tbody>
                    {renderedTimelines}
                </tbody>
            </table>
            <button className='nowButton' onClick={scrollToNow}>now</button>
        </div>
    );
};
