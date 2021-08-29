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
        marginLeft: 60
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        // transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Cardview(props) {
    const { text } = props;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}