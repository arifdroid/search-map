import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ToggleSwitch() {
    const [state, setState] = React.useState({
        checkedA: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (

        <FormControlLabel
            style={{ position: 'absolute', right: 20 }}
            control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
            label="Dark Mode"
        />

    );
}