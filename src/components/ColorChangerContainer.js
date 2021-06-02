import React, {useEffect, useState} from 'react';
import InputColor from 'react-input-color';
import {useDispatch, useSelector} from "react-redux";
import ColorChanger from "./ColorChanger";

const ColorChangerContainer = () => {
    const stateColor = useSelector(state => state.color);
    const [color, setColor] = useState(stateColor.color);
    const dispatch = useDispatch();
    const handleChangeColor = (e) => {
        setColor(e.hex);
        dispatch({type: 'CHANGE_COLOR', color: e.hex})
    };

    return (
       <ColorChanger {...{color, handleChangeColor}}/>
    );
};

export default ColorChangerContainer;
