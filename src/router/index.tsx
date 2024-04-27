import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/default'
import { CoffeeList } from '../pages/coffee-list'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<CoffeeList />} />
      </Route>
    </Routes>
  )
}
