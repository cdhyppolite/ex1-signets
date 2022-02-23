import './Signet.scss';

export default function Signet(props) {
        let ficherImage ="img/signets/" + props.sid + ".webp";
        // let btnSigTaille =30;
    return (
        <article className="Signet">
        <div className="Signet__divImg">
            <div className='btnSig haut'>Test</div>
            <img src={"img/signets/" + props.sid + ".webp"} alt={props.nom} />
        </div> 
        <div className="titre" style={{ backgroundColor: props.couleur }}>
            {props.nom}
            <h6>{props.date}</h6>
            <h6>{ficherImage}</h6>
            <div className='btnSig bas'>2Test</div>
        </div> 
        </article>
    );
}