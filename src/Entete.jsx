import './Entete.scss';
// import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
// import Badge from '@mui/material/Badge';

export default function Entete(props) {
    let nom = "Carl-David Hyppolite";
    let imgTaille =30;
    return (
        <header className="Entete">
            <h1>Signets</h1>
            <nav>
                <a href="#">{nom}</a>
                <div>
                    <img src="img/logo.png" alt="logo" width={imgTaille} height={imgTaille}/>
                </div>
            </nav>
        </header>
    );
}