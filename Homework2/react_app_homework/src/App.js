import './App.css';
import Academies from './Components/academies/academies';
import Card from './Components/card/card';
import academiesArray from '../src/db/academies.json'
import Counter from './Components/counter/counter';


function App() {
  const contentForSpf = 'Protect your skin with SPF 30. Have shiny, healthy and protected skin'
  const titleForHandCream = 'Neutrogena Hand cream'
  return (
    <div>
      <Card title='Catrice lipstick' content='High volumen mate liptick ' src={require('../src/images/catriceLipstick.jpg')}/>
      <Card title='Cleanser Bioderma' content='Cleanser without parfume and added esential oils' src={require('../src/images/cleanserBioderma.jpg')}/>
      <Card title='Black up SPF' content={contentForSpf} src={require('../src/images/blackUpSpf.png')}/>
      <Card title='Pantene Conditioner' content='Daily moisture conditioner for healthy hair' src={require('../src/images/panteneConditioner.jpg')}/>
      <Card title={titleForHandCream} content = "24hour moisturization with timerelease technology Strengthens skin's moisture barrier for soft, smooth skin Dermatologist developed" src={require('../src/images/neutrogenaHandCream.jpg')}/>
      <hr/>
      <Academies name='SEDC Academy' arrayOfAcademies={academiesArray}/>
      <hr/>
      <Counter/>
    </div>
  );
}

export default App;
