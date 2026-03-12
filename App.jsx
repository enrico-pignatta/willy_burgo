import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* NAVBAR: Puro HTML e classi Bootstrap */}
      <nav className="navbar navbar-dark bg-dark" data-bs-theme="dark">
        <div className="container">
          <span className="navbar-brand d-flex align-items-center">
            <img
              alt="Logo ANPI"
              src="/ANPI_logo.jpeg"
              width="50"
              height="30"
              className="d-inline-block align-top me-2"
            />
            Anpi Saluzzo e Valle Po
          </span>
        </div>
      </nav>

      {/* CONTENUTO LAPIDE: Sostituito <Container> e <Card> con semplici <div> */}
      <div className="container mt-4 mb-5">
        <div className="card shadow-sm">
          <div className="card-body p-4">
            
            {/* Titolo Principale */}
            <div className="text-center mb-5">
              <h1 className="fw-bold mb-2">Lapide dei Fucilati</h1>
              <h5 className="text-secondary">al muro di cinta dell’ex campo sportivo Willy Burgo</h5>
              <p className="text-muted fst-italic">lungo il viale di Piazza d’Armi (ora corso Beato Ancina)</p>
            </div>

            {/* 8 Settembre 1944 */}
            <div className="mb-5">
              <h4 className="border-bottom pb-2 text-danger">Fucilato l'8 settembre 1944</h4>
              <div className="mt-3">
                <h5 className="mb-1 fw-bold">Negro Giovanni Battista, <span className="text-primary fst-italic">"Arturo"</span></h5>
                <p className="fst-italic text-muted mb-2">
                  di Mario, nato il 2.09.1927 a Castell’Alfero, residente a Torino al n.3 di via Francesco Salvi (ora via Battista Bena), studente.
                </p>
                <p>
                  La banca dati dell’ISTORE Cuneo conferma la sua fucilazione a Saluzzo l’8.09.1944. Dal 15.06.1944 è caponucleo nella 4^ Brig. Cuneo della 1^ Div. d’assalto Garibaldi, operante dalla valle Po alle Langhe sotto il comando del tenente del Nizza Cavalleria Pompeo Colajanni <em>"Barbato"</em> (1906 - 1987) e in seguito intitolata all’antifascista Leo Lanfranco (nato il 19.10.1905 a Torino, commissario politico della Brigata, fucilato il 5.02.1945 a Villafranca Piemonte).
                </p>
              </div>
            </div>

            {/* 26 Agosto 1944 (Correzione storica) */}
            <div className="mb-4">
              <h4 className="border-bottom pb-2 text-danger">Fucilato il 26 agosto 1944</h4>
              <div className="mt-3">
                <h5 className="mb-1 fw-bold">Borgognone Luigi, <span className="text-primary fst-italic">"Luis"</span></h5>
                <p className="fst-italic text-muted mb-2">
                  di Francesco, nato il 12.06.1926 a Scurzolengo, residente ad Asti (frazione Valleandona).
                </p>
                <p>
                  Aderisce dall’1.07.1944 alla 1^ Brig. della Div. Matteotti “Tre confini”, operante nel territorio compreso tra Torino-Asti-Alba e in seguito intitolata a Renzo Cattaneo (nato il 24.08.1927 a Collegno, comandante di distaccamento, fucilato il 27.07.1944 a Moncalieri).
                </p>
                <div className="alert alert-light border border-warning mt-3">
                  <p className="mb-2">
                    Luigi risulta catturato o comunque detenuto a Villafranca Piemonte dal 24.08.1944. È fucilato due giorni dopo a Saluzzo, come conferma la banca dati dell’ISTORE Cuneo, e <strong>non l’8 settembre come indicato erroneamente nella lapide</strong>.
                  </p>
                  <p className="mb-0">
                    Alla sua morte, gli viene intitolata la 2^ Brigata della Divisione Cattaneo.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;