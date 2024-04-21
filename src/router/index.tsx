import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/default'
import { Home } from '../pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  )
}
