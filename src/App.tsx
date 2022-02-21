import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SignIn, SignUp } from 'pages'
import { SIGN_IN, SIGN_UP } from 'routes'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SIGN_IN} element={<SignIn />} />
        <Route path={SIGN_UP} element={<SignUp />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
