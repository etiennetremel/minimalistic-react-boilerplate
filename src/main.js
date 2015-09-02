import React from 'react';
import App from './components/App';

const el = document.createElement('div');
el.className = 'main';
document.body.appendChild(el);
React.render(<App />, el);
