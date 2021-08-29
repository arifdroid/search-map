import React from 'react';
import { TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';


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

    return (
        <TextField
            id={name}
            name={name}
            type={type}
            label={label}
            style={{
                backgroundColor:'rgba(234,240,240,0.40)',
                width:400,
                

            }}
            required={required}
            //   inputRef={register}
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
                endAdornment:
                    <Search />
            }}
            disabled={disabled}
        />
    );
}


export default Input;
