import info from './info.js';

// const jsonBody = document.getElementById('json-body');

// jsonBody.textContent = JSON.stringify(info, null, 2);

new JsonViewer({
    value: info,
    rootName: false,
    displayDataTypes: false,
    displaySize: false,
    theme: {
        scheme: 'vscode',
        base00: 'transparent',
        base01: '#343d46',
        base02: '#4f5b66',
        base03: '#65737e',
        base04: '#a7adba',
        base05: '#c0c5ce',
        base06: '#dfe1e8',
        base07: '#9CDCFD',
        base08: '#bf616a',
        base09: '#d08770',
        base0A: '#ebcb8b',
        base0B: '#a3be8c',
        base0C: '#96b5b4',
        base0D: '#8fa1b3',
        base0E: '#b48ead',
        base0F: '#ab7967'
      }
  }).render('#json-body')