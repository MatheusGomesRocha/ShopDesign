/**
    TELA ONDE FICAM TODOS OS PRODUTOS PARA VISUALIZAÇÃO (ACESSADA PELOS BOTÕES NO COMPONENT CATEGORY)
 */

import './AllProducts.css';

import React from 'react';
import PathComponent from '../sideComponents/Path';

export default () => {
    return(
        <div className={"allProducts"}>
            <PathComponent AllProducts={true} />

            <div className={"mainDiv"}>
                olá mundo
            </div>
        </div>
    )
}