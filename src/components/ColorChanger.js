import React from 'react';
import InputColor from 'react-input-color';


const ColorChanger = ({color, handleChangeColor}) => {

    return (
        <div style={{
            paddingRight: '15px'
        }}>
            <InputColor
                initialValue={`${color}`}
                onChange={handleChangeColor}
                placement="bottom"/>

        </div>
    );
};

export default ColorChanger;
