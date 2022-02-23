import './Signet.scss';

export default function Signet(props) {
        let ficherImage ="img/signets/" + props.sid + ".webp";
    return (
        <article className="Signet">
        <div className="Signet__divImg">
            <img src={"img/signets/" + props.sid + ".webp"} alt={props.nom} />
        </div> 
        <div className="titre">
            {props.nom}
            <h6>{props.date}</h6>
            <h6>{ficherImage}</h6>
        </div> 
        </article>
    );
}