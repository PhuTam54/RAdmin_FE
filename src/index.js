import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/modules/bootstrap/css/bootstrap.min.css';
import './assets/modules/fontawesome/css/all.min.css';

import './assets/modules/jqvmap/dist/jqvmap.min.css';
import './assets/modules/summernote/summernote-bs4.css';
import './assets/modules/owlcarousel2/dist/assets/owl.carousel.min.css';
import './assets/modules/owlcarousel2/dist/assets/owl.theme.default.min.css';

import './assets/css/style.css';
import './assets/css/components.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
