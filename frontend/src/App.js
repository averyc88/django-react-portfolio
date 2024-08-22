import React from 'react';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
    return (
        <div className="App">
            <header>
                <h1>My Portfolio</h1>
            </header>
            <main>
                <Education />
                <Experience />
            </main>
        </div>
    );
}

export default App;
