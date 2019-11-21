import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import './index.css';

const App = () =>{
    return(
        <Fragment>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="title">Резюме</h2>
                <strong>ПІБ</strong>
                <p>Омельковець Олександр Іванович</p>
                <strong>Контакти:</strong>
                <p>м. Харків, ул. Іванова, 1 <br/> i.ivanov@gmail.com <br/> (050) 111-11-11</p>
                
            </div>
        </Fragment>
       
        
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

