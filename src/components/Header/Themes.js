import React from 'react';
import Button from "@material-ui/core/Button";
import ColorPicker from "material-ui-color-picker";

const Themes = ({handleSwitchMode, handleSwitchColor, colors}) => {

    return (<>
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
            <ColorPicker onChange={color => handleSwitchColor(color)}
                    />
        </>
    );
};

export default Themes;
