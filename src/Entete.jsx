import './Entete.scss';
// import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
// import Badge from '@mui/material/Badge';

export default function Entete(props) {
    let nom = "Carl-David Hyppolite";
    // let nom = prompt("Entrez votre nom:", "Carl-David Hyppolite");
    let logo ="1";
    if (nom != "Carl-David Hyppolite") logo = "2";
    let imgTaille =30;
    return (
        <header className="Entete">
            <h1>Signets</h1>
            <nav>
                <a href="#">{nom}</a>
                <div>
                    <img src={"img/logos/logo"+logo+".png"} alt="logo" width={imgTaille} height={imgTaille}/>
                </div>
            </nav>
        </header>
    );
}