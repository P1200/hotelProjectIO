import './AttractionsTab.css';

const AttractionsTab = () => {

    return (
        <div >
            <div id='attractionImg'>
                <p id="header">ATRAKCJE</p>
            </div>
            <div id='promo'>
                Odwiedź atrakcje i odbierz zniżkę 20%
            </div>
            <div id="attractions">
                <h1>Dostępne obiekty</h1>
                <div className='attract'>
                    <div className="pesiota"/>
                       Wesołe miasteczko
                </div>
                <div className='attract'>
                    <div className="pesiota"/>
                        Park linowy
                </div>
                <div className='attract'>
                    <div className="pesiota"/>
                        Paintball
                </div>
            </div>
            <div id='descs'>
                <div className="desc">
                    <p>Rollercoaster Heaven</p>
                    Skorzystaj z niepowtarzalnej okazji i odwiedź nasze miejscowe wesołe miasteczko z 30 różnymi rollercoasterami.
                </div>
                <div className="desc">
                    <p>Line to line Park</p>
                    Wspinaj się z przyjaciółmi pod okiem wyszkolonych trenerów. Czeka na Ciebie 5 tras o różnych poziomach trudności.
                </div>
                <div className="desc">
                    <p>Shoot Me!</p>
                    Szukasz zemsty czy chcesz pokazać znajomym jak dobrze celujesz? Chwyć za broń i rusz w teren!
                </div>
            </div>
        
        </div>
    )
}

export default AttractionsTab;