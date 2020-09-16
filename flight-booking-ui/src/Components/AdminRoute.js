import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import AuthService from '../Service/auth.service'

const user = AuthService.getCurrentUser();

const AdminRoutes = ({ component: Component }) => (

    <Route

        render={
            props =>
                user && user.user.email == "admin@gmail.com" ?
                    (
                        <Component {...props} />
                    ) :
                    (
                        <Redirect to='/' />
                    )
        }
    />
);

export default AdminRoutes;