import React, {useEffect, useState} from 'react';
import {Badge, Card, CardContent} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import NewUsersChart from "./charts/NewUsersChart";
import TopBooksChart from "./charts/TopBooksChart";




const Stats = ({classes, theme}) => {

    return (
        <>
            <h2>Статистика</h2>
            <div className={classes.root}>
                <Grid container spacing={3} justify="center"
                      alignItems="stretch">
                    <Grid item xs={6} sm={6} lg={3}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>
                                <Badge color="secondary"
                                       className={classes.padding}
                                       badgeContent={'+30%'}>
                                    <Typography variant={'h5'}
                                                component={'h2'}>
                                     59
                                    </Typography> </Badge>
                                <Typography variant="body2"
                                            color="textSecondary"
                                            component="p">
                                   Нових користувачів в день
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={3}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>

                                    <Typography variant={'h5'}
                                                component={'h2'}>
                                        1800
                                    </Typography>
                                <Typography variant="body2"
                                            color="textSecondary"
                                            component="p">
                                    Унікальних читачів
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={3}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>


                                    <Typography variant={'h5'}
                                                component={'h2'}>
                                        2903
                                    </Typography>

                                <Typography variant="body2"
                                            color="textSecondary"
                                            component="p">
                                   Книжок додано у список "Переглянути пізніше"
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={3}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent}>

                                    <Typography variant={'h5'}
                                                component={'h2'}>
                                        1900
                                    </Typography>

                                <Typography variant="body2"
                                            color="textSecondary"
                                            component="p">
                                    Книжок прочитано
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent + ' ' + classes.chart}>
                                <Typography variant={'h5'}
                                            component={'h2'}>
                                   Самі популярні книги
                                </Typography>
                                <TopBooksChart {...{theme}}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/*<button onClick={handle}>click</button>*/}
                    <Grid item xs={12} sm={8} md={8}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent className={classes.cardContent + ' ' + classes.chart}>
                                <Typography variant={'h5'}
                                            component={'h2'}>
                                   Відвідуваність сайту
                                </Typography>
                                <NewUsersChart {...{theme}}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

        </>

    );
};

export default Stats;

