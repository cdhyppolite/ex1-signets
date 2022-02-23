import './ListeSignets.scss';
import Signet from './Signet';
import lesSignets from './data/signets.json';

export default function ListeSignets(props) {
    // let file = document.getElementsByTagName('img');
    // let lastModifiedDate = new Date(file.lastModified);
    // console.log(file);
    // console.log(lastModifiedDate);
    return (
        <section className="ListeSignets">
            <h2>Nos Signets</h2>
            <div className='Signets'>
                {
                    lesSignets.map(sig => <Signet key={sig.id} nom={sig.nom} sid={sig.id} date="Modifié le: 22 fév 2022" />)
                }
            </div>
        </section>
    );
}