import React from 'react';
import './PhotosMain.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Portraits from '../Portraits/Portraits';
import Fashion from '../Fashion/Fashion';
import Flowers from '../Flowers/Flowers';

const PhotosMain = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/portraits' component={Portraits}></Route>
                    <Route exact path='/fashion' component={Fashion}></Route>
                    <Route exact path='/flowers' component={Flowers}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default PhotosMain;
