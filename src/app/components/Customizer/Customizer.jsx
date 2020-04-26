import React from 'react';
import Builder from '../../classes/Builder/Builder';
import './Customizer.css';

const Customizer = (props) => {

  let parsedText = '';
  let author, notes, keyboard, layers, keymap, layout;
  if(props.text !== '') {
    parsedText = JSON.parse(props.text);
    keyboard = (<div>Keyboard: {parsedText.keyboard}</div>);
    keymap = (<div>Keymap: {parsedText.keymap}</div>);
    layout = (<div>Layout: {parsedText.layout}</div>);
    layers = (<div>Number of layers: {parsedText.layers.length}</div>);
    author = (<div>Author: {parsedText.author}</div>);
    let stuff = new Builder(parsedText);
    console.log(stuff.build());
  }

  console.log(parsedText);
  return (
    <div className='customizer'>
      {keyboard}
      {keymap}
      {layout}
      {layers}
      {author}
    </div>
  )
};

export default Customizer;