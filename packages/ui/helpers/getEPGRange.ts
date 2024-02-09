import { Range } from "@src/types/Range";
import { dateToNumber } from './dateToNumber';
import { ChannelItem, Schedule as ScheduleItem } from '@src/types/ChannelItem';


const getRange = (channels: ChannelItem[]): Range => {
    const range: Range = {
        start: Infinity,
        end: -Infinity
    };

    channels.forEach((channel: ChannelItem) => {
        channel.schedules.forEach((schedule: ScheduleItem) => {
          range.start = Math.min(range.start, dateToNumber(new Date(schedule.start)));
          range.end = Math.max(range.end, dateToNumber(new Date(schedule.end)));
        });
    });

    return range;
}

export const getEPGRange = (
    start: Date | number,
    end: Date | number,
    channels: ChannelItem[]
): Range => {
    const range = getRange(channels)

    return {
        start: start === undefined ? range.start : Math.min(dateToNumber(start), range.start),
        end: end === undefined ? range.end : Math.max(dateToNumber(end), range.end)
    };
}

