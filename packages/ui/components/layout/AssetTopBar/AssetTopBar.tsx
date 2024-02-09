import React from 'react';
import { useNavigate } from 'react-router-dom';

import './AssetTopBar.css'

export const AssetTopBar = () => {
    const navigate = useNavigate();

    return (
        <div className="assetTopBar">
            <span className="material-symbols-outlined" onClick={() => navigate('/')}>
                chevron_left
            </span>
            <span className="material-symbols-outlined">search</span>
        </div>
    )
}
