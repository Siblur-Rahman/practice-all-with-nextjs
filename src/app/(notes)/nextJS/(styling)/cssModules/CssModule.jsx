import Blog from '@/app/shared/Blog';
import React from 'react';

const CssModule = () => {
    return (
        <div className='topic-border'>
            <Blog
            id={'CSS Modules'}
            docs={'https://nextjs.org/docs/pages/building-your-application/styling/css-modules'}
            code={`
import styles from "../styles.module.css";

const Home = () => {
  return (
    <div className={styles.hello}>
      <p>Hello World</p>
    </div>
  );
};

export default Home;
                `}
            />
        </div>
    );
};

export default CssModule;