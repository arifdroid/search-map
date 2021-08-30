import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: 'rgba(234,240,240,0.40)',
        marginTop: 10,
        padding: 0


    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',

    },
    title: {
        fontSize: 14,
    },

});

export default function Cardview(props) {
    const { text } = props;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined" style={{ paddingTop: 0, height: 40 }}>
            <CardActionArea style={{ padding: 0 }}>
                <CardContent style={{ paddingTop:0 }}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}