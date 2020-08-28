import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import defaultTheme from "./themes/default-theme"
import WrapperComponent from './pages/WrapperComponent'
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <WrapperComponent />
      </ThemeProvider>
    </div>
  )
}

export default App
