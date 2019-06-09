import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Contacts } from './components/Contacts';
import './App.css';

const App: React.FC = () => {
    return (
      <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contacts} />
        </Layout>
    );
}

export default App;
