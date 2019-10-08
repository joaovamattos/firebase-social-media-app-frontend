import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyBytton from '../utils/MyButton';
import PostScream from './PostScream';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class Navbar extends Component {
    render() {
        const { authenticated } = this.props;
        return (
           <AppBar>
               <Toolbar className='nav-container'>
                    { authenticated ? (
                        <Fragment>
                            <PostScream />
                            <Link to="/">
                                <MyBytton tip="Home">
                                    <HomeIcon />
                                </MyBytton>
                            </Link>
                            <MyBytton tip="Notifications">
                                <NotificationsIcon />
                            </MyBytton>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button color='inherit' component={Link} to='/login'>Login</Button>
                            <Button color='inherit' component={Link} to='/'>Home</Button>
                            <Button color='inherit' component={Link} to='/signup'>Signup</Button>
                        </Fragment>
                    ) }
               </Toolbar>
           </AppBar>
        )
    }
}

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(Navbar);
