/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-10 18:18:41
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-30 11:37:44
 */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { store, useAppSelector, persister } from '@/store/index'
import { PersistGate } from 'redux-persist/integration/react'
import 'virtual:svg-icons-register' //svg雪碧图生成
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/style/main.css'
import { Provider } from 'react-redux'
import { Theme, ThemeProvider } from '@mui/material/styles'
import useGenerateTheme from '@/hooks/useGenerateTheme'
const MyApp = () => {
  const { themeColor } = useAppSelector((state) => state.theme)
  const { theme, changeTheme } = useGenerateTheme()
  useEffect(() => {
    changeTheme(themeColor)
    //改变全局css var
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeColor])

  return (
    <ThemeProvider theme={theme as Theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <MyApp></MyApp>
      </PersistGate>
    </Provider>
  </React.Fragment>
)
