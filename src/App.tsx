import './App.css'
import RadioButton from './RadioButton'

function App() {
  return (
    <>
      <RadioButton icon='/assets/outcome.svg' isActive={false} label='Saida' />
      <RadioButton icon='/assets/income.svg' isActive={true} label='Entrada' />
    </>
  )
}

export default App
