import React from 'react';


const AdsCampaign = ({ label, width, height, style }) => {
    return (
        <div style={{
            width: width,
            height: height,
            background: '#cdcdcd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            ...style
        }}>
            {label}
        </div>
    );
}

export default AdsCampaign;