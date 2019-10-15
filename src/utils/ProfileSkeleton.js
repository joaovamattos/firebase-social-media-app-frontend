import React from 'react';
import PropTypes from 'prop-types';
import NoImg from '../images/no-img.png';
// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
// Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";

const styles = theme => ({
    ...theme.spreadThis,
    handle: {
        height: 20,
        backgroundColor: '#ff3d00',
        width: 60,
        margin: '0 auto 7px auto'
    },
    fullLine: {
        height: 15,
        backgroundColor: '#a8a8a8',
        width: '100%',
        marginBottom: 10
    },    
    halfLine: {
        height: 15,
        backgroundColor: '#a8a8a8',
        width: '50%',
        margin: '0 auto',
        marginBottom: 10
    }
})

const ProfileSkeleton = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img src={NoImg} alt="Profile" className="profile-image"/>
                </div>
                <hr/>
                <div className="profile-details">
                    <div className={classes.handle} />
                    <hr/>
                    <div className={classes.fullLine} />
                    <div className={classes.halfLine} />
                    <hr/>
                    <LocationOn color="primary" /> <span>Location</span>
                    <hr/>
                    <LinkIcon color="primary" /> <span>https://website.com</span>
                    <hr/>
                    <CalendarToday color="primary" /> <span>Joined date</span>
                    <hr/>
                </div>
            </div>
        </Paper>
    )
}

ProfileSkeleton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileSkeleton);
