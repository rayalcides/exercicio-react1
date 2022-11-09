import './App.css'
import Relogio from './rai-sala/Relogio'
import Minusculo from './rai-sala/Minusculo'
import Maiusculo from './rai-sala/Maiusculo'
import Info from './components/Info'
import Informacao from './components/Informacao'
import Foto from './rai-sala/Foto'
import Cards from './rai-sala/Cards'


function App() {


  return (
   <div>
    <Cards/>
    <Foto/>
    <Relogio/>
    <Minusculo text="SOU UM TEXTO EM MAIUSCULO CONVERTIDO"/>
    <Maiusculo text="eu sou um texto em minusculo que foi convertido"/> 
    <Info quantidade="788" tipo="publicaçoes"/>
    <Info quantidade="31.4k" tipo="seguidores"/>
    <Info quantidade="422" tipo="seguindo"/>
    <Informacao>750</Informacao>
    <Informacao>Publicaçoes</Informacao>
   </div>
  )
}

export default App
