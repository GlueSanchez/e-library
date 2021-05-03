import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from "highcharts-react-official";

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

const options = {
    title: {
        text: 'My stock chart'
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
        }
    ]
};


const Stats = ({classes}) => {

    return (
        <>
            <h2>Statistic</h2>
            {/*<Card className={classes.root} variant="outlined">*/}
            {/*    <CardContent className={classes.cardContent}>*/}
            {/*        */}
            {/*    </CardContent>*/}
            {/*</Card>*/}
            {/*<Card className={classes.root} variant="outlined">*/}
            {/*    <CardContent className={classes.cardContent}>*/}

            {/*    </CardContent>*/}
            {/*</Card>*/}
            <div className={classes.root} >
                <Grid container spacing={3} justify="center"
                      alignItems="stretch">
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>
                                <Typography variant={'h5'}
                                            component={'h2'}>
                                    50
                                </Typography>
                                <Typography variant="body2"
                                            color="textSecondary"
                                            component="p">
                                    New User per day
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>
                                <Typography variant={'h5'}
                                            component={'h2'}>
                                    50
                                </Typography>
                                <Typography variant="body2"
                                            color="textSecondary"
                                            component="p">
                                    New User per day
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>
                                <Typography variant={'h5'}
                                            component={'h2'}>
                                    50
                                </Typography>
                                <Typography variant="body2"
                                            color="textSecondary"
                                            component="p">
                                    New User per day
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>
                                <Typography variant={'h5'}
                                            component={'h2'}>
                                    50
                                </Typography>
                                <Typography variant="body2"
                                            color="textSecondary"
                                            component="p">
                                    New User per day
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>
                                <HighchartsReact
                                    responsive
                                    highcharts={Highcharts}
                                    constructorType={"stockChart"}
                                    options={options}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

        </>

    );
};

export default Stats;

