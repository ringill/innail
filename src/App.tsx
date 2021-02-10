import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { GalleryComponent } from "./components/GalleryComponent";
import { Contacts } from './components/Contacts';
import './App.css';

function App() {
  return (
    <Layout>
      <Route exact path='/' component={GalleryComponent} />
      <Route path='/contact' component={Contacts} />
    </Layout>
  );
}

export default App;
