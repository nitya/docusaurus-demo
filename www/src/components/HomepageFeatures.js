import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fundamentals',
    Svg: require('../../static/img/undraw_pair_programming.svg').default,
    description: (
      <>
        Let's talk about what X is and why it matters. What are the core components of X and how can you get started using it?
      </>
    ),
  },
  {
    title: 'Deep Dives',
    Svg: require('../../static/img/undraw_web_search.svg').default,
    description: (
      <>
        Time to look under the hood. Let's dive into the details of how X works, how to architect solutions using it.
      </>
    ),
  },
  {
    title: 'Advanced Concepts',
    Svg: require('../../static/img/undraw_web_devices.svg').default,
    description: (
      <>
        Thinking production ready? Want to explore advanced features for modern apps? Let's talk tips, tricks and tools!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
