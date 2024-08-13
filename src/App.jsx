import Header from './components/Header/Header'
import { CORE_CONCEPTS } from './data.js'
import CoreConcept from './components/CoreConcept/CoreConcept';
import { TabButton } from './components/TabButton/TabButton';

function App() {
  function handleSelect(selectedButton){
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
            <h2>CORE CONCEPTS</h2>
          <ul>
      <CoreConcept 
      image={CORE_CONCEPTS[0].image} 
      title = {CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description} />

      <CoreConcept {...CORE_CONCEPTS[1]}/>
      <CoreConcept {...CORE_CONCEPTS[2]}/>
      <CoreConcept {...CORE_CONCEPTS[3]}/>
      </ul>
      </section>
      <section id='examples'>
        <h2>Example</h2>
        <menu>
        <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
        <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
        </menu>
      </section>
      Dynamic Content
      </main>
    </div>
  );
}

export default App;
