import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/default'
import { CoffeeList } from '../pages/coffee-list'
import { Checkout } from '../pages/checkout'
import { Success } from '../pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<CoffeeList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
