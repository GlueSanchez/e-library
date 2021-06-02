import React from 'react';
import Button from "@material-ui/core/Button";
import ColorPicker from "material-ui-color-picker";
import ColorChanger from "../ColorChanger";

const Themes = ({handleSwitchMode, handleSwitchColor, colors}) => {

    return (<>
            <h2> Themes changer </h2>
            <Button onClick={handleSwitchMode}>
                Change mode
            </Button>
            <Button onClick={() => handleSwitchColor(colors.primary_1)}>
                Change mode
            </Button>
            <Button onClick={() => handleSwitchColor(colors.primary_2)}>
                Change mode
            </Button>
            <Button onClick={() => handleSwitchColor(colors.primary_3)}>
                Change mode
            </Button>
            <ColorChanger/>

        </>
    );
};

export default Themes;
