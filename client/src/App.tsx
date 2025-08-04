import React from 'react';
import HelloWorld from '@/components/HelloWorld';
import '@/styles/globals.css'; // Global styles
import styles from '@/styles/main.module.css'; // CSS Modules

const App: React.FC = () => {
    return (
        <div className="app">
            <h1>Welcome to React + TypeScript + Webpack</h1>
            <HelloWorld />
        </div>
    );
};

export default App;