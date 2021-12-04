import {useNavigate} from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";
import {AppLinks} from "app/components/AppRoutes";
import {makeStyles} from "@mui/styles";

const styles = {
    parentFlexSplit: {
        display: "flex",
        justifyContent: "space-between"
    },
    rightAlignItem: {
        marginLeft: "auto"
    }
}
const useStyles = makeStyles(styles)

export const NotFoundView = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate(AppLinks.welcome)
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '100vh'}}
        >
            <Grid item xs={3}>
                <Card sx={{maxWidth: 600}}>
                    <CardMedia
                        component="img"
                        height="800"
                        image="/404.jpg"
                        alt="Seite nicht gefunden"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div" color="text.primary">
                            404 - Not Found
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            This page isn't here. Maybe it moved. Or maybe it never existed.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">Sorry. That's how it goes sometimes.</Typography>
                    </CardContent>
                    <CardActions disableSpacing className={classes.parentFlexSplit}>
                        <Button onClick={navigateToHome} size="large">Zurück</Button>
                        <Typography className={classes.rightAlignItem} variant="subtitle2"><a href='https://www.freepik.com'>www.freepik.com</a>.</Typography>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}


// export const NotFoundView = () => {
//
//     return (
//         <>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: {xs: 'column', md: 'row'},
//                     alignItems: 'center',
//                     bgcolor: 'background.paper',
//                     overflow: 'hidden',
//                     borderRadius: '12px',
//                     boxShadow: 1,
//                     fontWeight: 'bold',
//                 }}
//             >
//                 <Box
//                     component="img"
//                     alt="404 - nichts gefunden"
//                     src="/404.jpg"
//                     sx={{
//                         height: 600,
//                         width: 800,
//                         maxHeight: {xs: 233, md: 1024},
//                         maxWidth: {xs: 350, md: 768},
//                     }}
//                 />
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: {xs: 'center', md: 'flex-start'},
//                         m: 3,
//                         minWidth: {md: 350},
//                     }}
//                 >
//                     <Box component="span" sx={{fontSize: 16, mt: 1}}>
//                         <Typography>This page isn't here. Maybe it moved. Or maybe it never existed.</Typography>
//                         <Typography> Sorry. That's how it goes sometimes..</Typography>
//                     </Box>
//                     <Box component="span" sx={{color: 'primary.main', fontSize: 22}}>
//                         <Button onClick={navigateToHome}>Zurück</Button>
//                     </Box>
//                     <Box
//                         sx={{
//                             mt: 1.5,
//                             p: 0.5,
//                             backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
//                             borderRadius: '5px',
//                             color: 'primary.main',
//                             fontWeight: 'medium',
//                             display: 'flex',
//                             fontSize: 12,
//                             alignItems: 'center',
//                             '& svg': {
//                                 fontSize: 21,
//                                 mr: 0.5,
//                             },
//                         }}
//                     >
//                     </Box>
//                 </Box>
//             </Box>
//             <Typography><a href='https://www.freepik.com/vectors/business'>Business vector created by pikisuperstar -
//                 www.freepik.com</a>.</Typography>
//         </>
//     )
// }
