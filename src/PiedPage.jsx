import './PiedPage.scss';

export default function PiedPage() {
    return (
        <footer className="PiedPage">
            <div className='btnPlus'>
            <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            </div>
            <h1>&copy;{new Date().getFullYear()} - TIM Maisonneuve - Tous droits réservés</h1>
        </footer>
    );
}