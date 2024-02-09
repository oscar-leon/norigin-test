import { useLocation } from 'react-router-dom';

import { AssetTopBar } from '../../components/layout';

import './asset.css';

export function Asset() {
    const location = useLocation();


    console.log({ location });
    
    return (
        <>
            <AssetTopBar />
            <div className="assetDetailPage">
                <div className="imgBackground"></div>
                <div className="assetDetailContainer">
                    <div className="channelContainer">
                        <h3>comedy central</h3>
                        <span>14:30-17:00</span>
                        <span>● 3 May</span>
                    </div>
                    <h2 className="assetName">{location.state.title}</h2>
                    <div className="genres">
                        <span>2015</span>
                        <span>Romance</span>
                        <span>Drama</span>
                        <span>Horror</span>
                    </div>
                    <div className="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat...
                        </p>
                        <span>more</span>
                    </div>
                    <div className="editorial">
                        <span>Cast: Wagner Moura, Boyd Holbruk, Pedro Pascal</span>
                        <span>Creators: Chris Brancato, Carlo Bernard, Doug Miro</span>
                    </div>
                </div>
            </div>
        </>
    );
}
