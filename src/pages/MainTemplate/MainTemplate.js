import React from 'react';
import Roles from './../Roles';
import Departments from './../Departments';
import Employees from './../Employees';
import Advances from './../Advance';
import  Attendence from './../Attendence';
import {Route} from "react-router-dom";


class MainTemplate extends React.Component {

    render() {
        return (
            <div className="padding">
                <Route exact path="/" component={Employees}/>
                <Route path="/departments" component={Departments}/>
                <Route path="/roles" component={Roles}/>
                <Route path="/advances" component={Advances}/>
                <Route path="/attendence" component={Attendence}/>

            </div>
        );
    }
}

export default MainTemplate;