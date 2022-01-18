import React from 'react';
import Layout from '@theme/Layout';

export default function RoadmapPage() {
  return (
    <Layout title="Roadmap">
        <div
            style={{
            display: 'flex',
            flexDirection: `column`,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px',
            }}>

            <h1>My Learning Roadmap</h1>
            <p>This is a React-generated page example..</p>
            <ol>
                <li>Item 1 </li>
                <li>Item 2 </li>
                <li>Item 3 </li>
                <li>Item 4 </li>
                <li>Item 5 </li>
            </ol>
        </div>
    </Layout>
  );
}