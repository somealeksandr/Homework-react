import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import './index.css';

const Resume = () =>{
    return(
        <Fragment>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <h2 className="title">Резюме</h2>
                <strong>ПІБ</strong>
                <p>Омельковець Олександр Іванович</p>
                <strong>Контакти:</strong>
                <p>м. Рівне, вул. Короленка, 5 <br/> omelkovets69@gmail.com <br/> (096) 068-29-33</p>
                <strong>ПРОФЕСІЙНІ НАВИЧКИ</strong>
                <p>Мова програмування JavaScript</p>
                <strong>Технології:</strong>
                <ul>
                    <li><a href="https://learn.javascript.ru/">Javascript</a></li>
                    <li><a href="http://htmlbook.ru/">HTML, CSS, XML</a></li>
                    <li><a href="https://gulpjs.com/">Gulp</a></li>
                    <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
                </ul>
                <strong>ІНОЗЕМНІ МОВИ:</strong>
                <p>Англійська мова – на рівні треба було б підвчити.</p>
                <strong>ОСОБИСТА ІНФОРМАЦІЯ:</strong>
                <p>Дата народження: 12.06.1997</p>
                
            </div>
        </Fragment>
       
        
    );
}

ReactDOM.render(<Resume />, document.getElementById('root'));

