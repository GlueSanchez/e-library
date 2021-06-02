import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxItem = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    );
};

export default CheckboxItem;
