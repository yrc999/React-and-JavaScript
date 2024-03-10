import React from 'react';
import { GridProvider } from './GridContext';
import Grid from './Grid';

function App() {
    return (
        <GridProvider>
            <Grid />
        </GridProvider>
    );
}

export default App;