import React from "react"
import { Switch, BrowserRouter } from "react-router-dom"
//import PublicRoutes from './PublicRoutes'
import AuthRoute from './AuthRoute'
import PrivateRoute from './PrivateRoute'
import { authRoutes, privateRoutes } from "./routes"
import CustomLoadable from "../../common/utils/CustomLoadable"

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Switch>
        {
          authRoutes.map((route) => {
            const Component = CustomLoadable({
              loader: route.loader,
            })
            return (
              <AuthRoute
                exact
                render={props => (<Component {...props} />)}
                path={route.path}
                key={route.path}
              />
            )
          })
        }
        {
          privateRoutes.map((route) => {
            const Component = CustomLoadable({
              loader: route.loader,
            })
            return (
              <PrivateRoute
                exact
                render={props => (<Component {...props} />)}
                path={route.path}
                key={route.path}
              />
            )
          })
        }
      </Switch>
    </BrowserRouter>
  )
}
