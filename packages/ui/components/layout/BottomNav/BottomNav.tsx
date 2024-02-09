import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import './BottomNav.css';

enum MenuitemIndexes {
  LIVE_TV = 0,
  VIEW_LIST = 1,
  HOME = 2,
  REPLAY = 3,
  LOCATION = 4,
}

const ICON_CLASS_NAME = 'material-symbols-outlined';

export const BottomNav = () =>  {
    const navigate = useNavigate();
    const [activeMenuItem, setActiveMenuItem] = useState(MenuitemIndexes.HOME);

    const getClassName = useCallback((index: MenuitemIndexes) => {
        if (index === activeMenuItem) {
            return `${ICON_CLASS_NAME} active`
        }

        return ICON_CLASS_NAME;
    }, [activeMenuItem])

    const handleDefaultClick = (index: MenuitemIndexes) => {
        setActiveMenuItem(index);
    }

    const handleHomeClick = (index: MenuitemIndexes) => {
        setActiveMenuItem(index)
        navigate('/')
    }

    return (
        <div className="bottomNav">
            <span
                className={getClassName(0)}
                onClick={() => handleDefaultClick(MenuitemIndexes.LIVE_TV)}
            >
                live_tv
            </span>
            <span
                className={getClassName(1)}
                onClick={() => handleDefaultClick(MenuitemIndexes.VIEW_LIST)}
            >
                view_list
            </span>
            <span
                className={getClassName(2)}
                onClick={() => handleHomeClick(MenuitemIndexes.HOME)}
            >
                home
            </span>
            <span
                className={getClassName(3)}
                onClick={() => handleDefaultClick(MenuitemIndexes.REPLAY)}
            >
                replay
            </span>
            <span
                className={getClassName(4)}
                onClick={() => handleDefaultClick(MenuitemIndexes.LOCATION)}
            >
                location_on
            </span>
        </div>
    )
}
