import React, { useMemo, ReactNode } from 'react';

import { Schedule } from './Schedule';
import { numberToDate } from '../helpers';
import { Schedule as ScheduleType } from '../types/ChannelItem';

export type TimeLineProps = {
  range: {
    start: Date | number,
    end: Date | number
  },
  channel: ReactNode,
  schedules: ScheduleType[]
};

export const Timeline = ({ channel, range, schedules }: TimeLineProps) => {
    const normalizedRange = {
        start: range.start instanceof Date ? range.start : numberToDate(range.start),
        end: range.end instanceof Date ? range.end : numberToDate(range.end)
    };

    const renderedSchedules = useMemo(() => {
        if (schedules.length === 0) {
            return [];
        }

        const result = schedules.map((schedule, index) => (
            <Schedule
                key={`${schedule.id}-${index}`}
                start={new Date(schedule.start)}
                end={new Date(schedule.end)}
                title={schedule.title}
            />
        ));

        if (normalizedRange.start < new Date(schedules[0].start)) {
            const additionalSchedule = (
                <Schedule
                    key={`extra-${schedules[0].id}`}
                    start={normalizedRange.start}
                    end={new Date(schedules[0].start)}
                    title={schedules[0].title}
                />
            );
            result.unshift(additionalSchedule);
        }

        return result;
    }, [schedules, normalizedRange]);

    return (
        <tr>
            {channel}
            {renderedSchedules}
        </tr>
    );
};
