// This is the the entry point into the client side application

import React from 'react';
import HelloWorld from '../app/components/HelloWorld';

export default React.render(<HelloWorld location="client"/>, document.getElementById('app'));
