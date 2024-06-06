// App.tsx
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import ExampleMdx from './example.mdx';
import './shadcn-typography.css'

const App: React.FC = () => {
  return (
    <MDXProvider>
      <div>
        <div className='py-10 lg:px-96 px-5'>
          <ExampleMdx />
        </div>
      </div>
    </MDXProvider>
  );
};

export default App;
