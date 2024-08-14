import { TabButton } from "./TabButton"
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
    let tabContent = <p>Please Select a Topic</p>;
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }
    return(
        <Section id='examples' >
            <Tabs 
          
            buttons={<><TabButton
              isSlected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components 
            </TabButton>
            <TabButton
              isSlected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSlected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSlected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton></>}>
          
          {tabContent}
          </Tabs>
          
          </Section>
    )
}