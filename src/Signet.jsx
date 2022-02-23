import './Signet.scss';

export default function Signet(props) {
        let ficherImage ="img/signets/" + props.sid + ".webp";
    return (
        <article className="Signet">
        <div className="Signet__divImg">
            <div className='btnSig haut'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </div>
            <img src={"img/signets/" + props.sid + ".webp"} alt={props.nom} />
        </div> 
        <div className="titre" style={{ backgroundColor: props.couleur }}>
            {props.nom}
            <h6>Modifié le: <i>{props.date}</i></h6>
            <div className='btnSig bas'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path> </svg>
            </div>
        </div> 
        </article>
    );
}