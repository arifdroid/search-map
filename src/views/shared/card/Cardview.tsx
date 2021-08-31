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
        background: 'linear-gradient(to right bottom, rgba(234,240,240,0.80), rgba(234,240,240,0.40))',
        marginTop: 10,
        paddingTop: 0,        
        height:40,
        display:'flex',

        


    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',

    },
    title: {
        fontSize: 14,
        color:'black',
        fontWeight:450,
        paddingTop:10,
        width:350,
        marginLeft:10,
        border:0
        
    },

});

export default function Cardview(props) {
    const { text } = props;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined" style={{  }}>                            
                    <Typography className={classes.title}                                       
                     >
                        {text}
                    </Typography>                
        </Card>
    );
}