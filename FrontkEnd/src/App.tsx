import './App.css'
import HeaderContextProvider from './features/debts/hooks/context'
import DebtPage from './features/debts/pages/debtPage'


function App() {

  return (
    <>
    <HeaderContextProvider>
      <DebtPage/>
    </HeaderContextProvider>
    </>
  )
}

export default App
