import './Appli.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeSignets from './ListeSignets';

export default function Appli() {
  return (
    <div className="Appli">
      <Entete/>
      <ListeSignets/>
      <PiedPage />
    </div>
  );
}
