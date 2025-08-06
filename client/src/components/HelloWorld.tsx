import React from 'react';
import * as styles from './HelloWorld.module.scss';

const HelloWorld: React.FC = () => {
    return (
        <div className={styles.container}>
            <p>Hello TypeScript React!</p>
        </div>
    );
};

export default HelloWorld;