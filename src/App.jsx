import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
