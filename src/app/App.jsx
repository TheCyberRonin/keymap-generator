import React, { useState, useEffect} from 'react';
import Upload from './components/Upload/Upload';
import Customizer from './components/Customizer/Customizer';
import './App.css';

const App = (props) => {
  const [text, setText] = useState('');
  const handleJSON = (fileText) => {
    setText(fileText);
  }
  useEffect(() => {
    // should handle the stateChange ignoring the first one setting it to an empty string
    if(text !== '') {
      // now we can parse it and then build on what's going on. Maybe make this a component and pass down text?
    }
  });
  return(
    <div>
      <Upload preview accept='.json, .JSON' name='file' text='Load a file' handleJSON={handleJSON}/>
      <div className='customizer-container'>
        <Customizer text={text} />
      </div>
    </div>
  )
}

export default App;