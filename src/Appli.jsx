import './Appli.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeSignets from './ListeSignets';
// import ListeProduits from './ListeProduits';
// import {useState} from 'react';

export default function Appli() {
  return (
    <div className="Appli">
      <Entete/>
      <ListeSignets/>
      <PiedPage />
    </div>
  );
}
