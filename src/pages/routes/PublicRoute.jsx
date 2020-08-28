import React from "react"
import { Route } from "react-router-dom"
import CustomLoadable from "../../common/utils/CustomLoadable"

export default function PublicRoute({loader, ...restProps}) {
  const Component = CustomLoadable({
    loader
  })
  return (
    <Route 
      render={componentProps => (<Component {...componentProps} />)}
      {...restProps}
    />
  )
}
