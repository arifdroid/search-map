import React, { useState } from 'react';
import { createStyles, InputBase, makeStyles, TextField, Theme } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inputStyle: {
            color: "black",
            fontWeight:420            
        },
    }),
);



export function Input(props) {

    const {
        label,
        name,
        hint,
        type,
        placeholder,
        autoFocus,
        autoComplete,
        required,
        externalErrorMessage,
        disabled,
        endAdornment,
    } = props;

    const classes = useStyles();

    const [isFocus, setIsFocus] = useState(false)

    return (
        <TextField
            id={name}
            name={name}
            type={type}
            label={label}
            color={'secondary'}
            style={{
                backgroundColor: 'rgba(234,240,240,0.60)',
                width: 400,
                borderRadius: 3,
                borderColor: 'white'

            }}

            required={required}
            onChange={(event) => {
                props.onChange &&
                    props.onChange(event.target.value);

            }}
            onBlur={(event) => {
                props.onBlur && props.onBlur(event);
            }}
            margin="normal"
            variant="outlined"
            size="small"
            placeholder={placeholder || undefined}
            autoFocus={autoFocus || undefined}
            autoComplete={autoComplete || undefined}
            InputProps={{
                className: classes.inputStyle,
                endAdornment:
                    <Search color={'secondary'} />
            }}
            disabled={disabled}
        />

    );
}


export default Input;
