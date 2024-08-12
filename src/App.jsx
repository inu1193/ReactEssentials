import Header from './components/Header'
import { CORE_CONCEPTS } from './data.js'
import CoreConcept from './components/CoreConcept';

function App() {
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
      </main>
    </div>
  );
}

export default App;
