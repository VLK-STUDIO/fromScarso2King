import React from 'react';
import './App.css';
import { Layout, MainTitle, Creator } from './components';
import { setConfiguration } from 'react-grid-system';
import { GoodMorningList } from './components/GoodMorningList/GoodMorningList';

setConfiguration({ containerWidths: [540, 740, 960, 1140, 1240] });

function App() {  
  return (
    <Layout>
      <MainTitle />
      <Creator />
      <GoodMorningList />
    </Layout>
  );
}

export default App;
