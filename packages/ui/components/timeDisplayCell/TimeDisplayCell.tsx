import { useMemo, RefObject } from 'react';

import { numberToDate, formatDate, isCurrentTime } from '../../helpers';

import './TimeDisplayCell.css';

export type TimeDisplayCellProps = {
    time: Date | number,
    minutes?: Array<number>,
    currentTimeIndicatorRef: RefObject<HTMLDivElement>,
};

export const TimeDisplayCell = ({
    time,
    currentTimeIndicatorRef,
    minutes = [0],
}: TimeDisplayCellProps) => {
    const date = useMemo(() => numberToDate(time), [time]);
    const now = new Date();

    const isCurrent = useMemo(() => isCurrentTime(date, now), [date, now]);
    const shouldDisplayTime = useMemo(() => minutes.includes(date.getMinutes()), [date, minutes]);

    return (
        <th className='placeHolder'>
            {shouldDisplayTime && (
                <div className='timeContainer'>
                    {formatDate(date)}
                </div>
            )}
            {isCurrent && (
                <div ref={currentTimeIndicatorRef} className='currentTimeIndicator' aria-hidden="true" />
            )}
        </th>
    );
};
