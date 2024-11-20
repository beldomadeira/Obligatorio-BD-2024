import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Escuela de Deportes de Nieve. Todos los derechos reservados.</p>
            <div className="footer-links">
                <a href="/contacto">Contacto</a>
                <a href="/privacidad">Política de Privacidad</a>
                <a href="/terminos">Términos de Uso</a>
            </div>
        </footer>
    );
}

export default Footer;
