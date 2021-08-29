import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

interface ButtonIconProps{
    type:string
}

export default function ButtonIcon(props:ButtonIconProps) {

    const { type } = props;



    const _typeRender = (type) => {
        switch (type) {
            case 'DELETE':

                return (
                    <DeleteIcon />
                )
            case 'SEND':

                return (
                    <Icon>send</Icon>
                )

            case 'UPLOAD':

                return (
                    <CloudUploadIcon />
                )

            default: // SAVE
                return (
                    <SaveIcon />
                )
        }

    }

    const classes = useStyles();

    return (

        <div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={_typeRender(type)}
            >
                {type}
            </Button>
        </div>

    );
}