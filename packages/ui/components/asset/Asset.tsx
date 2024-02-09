import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'classnames'

import { formatDate } from '../../helpers';

import './Asset.css'

export type ShowProps = {
  title: string;
  start: Date;
  end: Date;
};

export const Asset = ({ title, start, end }: ShowProps) => {
    const navigate = useNavigate();

    const handleAssetClick = useCallback(() => {
        navigate('/asset', { state: { title }})
    }, [title, navigate])


    const now = new Date().getTime();
    const isAssetPlayingCurrently = useMemo(() => {
        return now > start.getTime() && now < end.getTime();
    }, [now, start, end]);

    return (
        <div className={clsx('asset', { active: isAssetPlayingCurrently })} onClick={handleAssetClick}>
            <span>{title}</span>
            <span className='assetRange'>
                {formatDate(start)} - {formatDate(end)}
            </span>
        </div>
    )
}
