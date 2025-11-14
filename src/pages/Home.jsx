import '../styles/Home.scss';
import Presentacion from '../components/Presentacion';
import Experiencia from '../components/Experiencia';
import Portfolio from '../components/Portfolio';

function Home() {

  return (
    <div className="App">
      <Presentacion/>
      <Experiencia/>
      <Portfolio/>
    </div>
  )
}

export default Home;