class Builder {
  constructor(parsedMap, opts) {
    this.enum = [];
    this.layers = [];
    this.files = [];
    this.layerFunction = '';
    this.generatedWarning = `/* WARNING! THIS FILE WAS GENERATED!
* Please take caution when using this file since it was generated.
* Edit this file only if you know what you\'re doing
*/`;
    this.layers = parsedMap.layers;
    this.layerFunction = parsedMap.layout;
  }
  generateInclude(){

  }
  generateEnum() {
    this.enum = this.layers.map((layer, index) => {return `_LAYER_${index}`} );
    return `enum keyboard_layers {
  ${this.enum.join(',\n  ')}
};`;
  }
  generateLayers() {
    let formattedLayers = this.enum.map((e,index) => {
      return `[${e}] = ${this.layerFunction}(${this.layers[index].join(',')});`;
    })
    return `const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
  ${formattedLayers.join('\n  ')}
};`
  }
  build() {
    let buildStr = '';
    buildStr += this.generatedWarning;
    buildStr += '\n';
    buildStr += this.generateEnum();
    buildStr += '\n';
    buildStr += this.generateLayers();
    return buildStr;
  }
}
export default Builder;