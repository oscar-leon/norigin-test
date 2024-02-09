import React from 'react';

import { Asset } from './asset/Asset';
import { getColSpan, numberToDate } from '../helpers';

export type ScheduleProps = {
  start: Date | number,
  end: Date | number,
  title: string;
};

export const Schedule = ({ start, end, title }: ScheduleProps) => (
    <td colSpan={getColSpan(start, end)}>
        <Asset start={numberToDate(start)} end={numberToDate(end)} title={title} />
    </td>
);
