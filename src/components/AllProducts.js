/**
 TELA ONDE FICAM TODOS OS PRODUTOS PARA VISUALIZAÇÃO (ACESSADA PELOS BOTÕES NO COMPONENT CATEGORY)
 */

import './AllProducts.css';

import React, {useState} from 'react';
import PathComponent from '../sideComponents/Path';

export default () => {
    const [category, setCategory] = useState('Headgear');
    const [subCategory, setSubCategory] = useState();

    let array = [
        {
            id: 1,
            category: 'Headgear',
            subCategory1: 'Haute Couture',
            subCategory2: 'Knee Clothing',
            subCategory3: 'Printers'
        },
        {id: 2, category: 'Mens Wear', subCategory1: 'Skirts', subCategory2: 'Womens Wear'},
        {id: 3, category: 'Ice Skates', subCategory1: 'PC', subCategory2: 'Aprons'},
        {id: 4, category: 'Dungarees'},
        {id: 5, category: 'Jodhpur Pants'},
        {id: 6, category: 'Stirrup Pantes'},
        {id: 7, category: 'Footewar'},
        {id: 8, category: 'Punk Pants'},
    ]

    return (
        <div className={"allProducts"}>
            <PathComponent AllProducts={true}/>

            <div className={"mainDiv"}>

                <div className={"sideCategory"}>
                    <div className={"topDiv"}>
                        <span className={"categoryTitle"}>Category</span>
                    </div>

                    <div className={"mainCategory"}>
                        {array.map((item, k) => (
                            <div className={"itemCategory"}>
                                <div onClick={() => setCategory(item.category)} className={"categoryDiv"}>
                                    <span
                                        style={{
                                            color: item.category == category ? '#CD553F' : '#000'
                                        }}
                                        className={"text"}>{item.category}</span>
                                </div>

                                <div className={"subCategory"}
                                     style={{display: category == item.category ? 'flex' : 'none'}}>
                                    {item.subCategory1 &&
                                    <>
                                        <div onClick={() => setSubCategory(item.subCategory1)} className={"subCategoryItem"}>
                                            <span
                                                style={{
                                                    color: item.subCategory1 == subCategory ? '#CD553F' : '#000'
                                                }}
                                                className={"subCategoryText"}>- {item.subCategory1}</span>
                                        </div>
                                        <div onClick={() => setSubCategory(item.subCategory2)} className={"subCategoryItem"}>
                                            <span
                                                style={{
                                                    color: item.subCategory2 == subCategory ? '#CD553F' : '#000'
                                                }}
                                                className={"subCategoryText"}>- {item.subCategory2}</span>
                                        </div>

                                        {item.subCategory3 &&
                                        <div onClick={() => setSubCategory(item.subCategory3)} className={"subCategoryItem"}>
                                            <span
                                                style={{
                                                    color: item.subCategory3 == subCategory ? '#CD553F' : '#000'
                                                }}
                                                className={"subCategoryText"}>- {item.subCategory3}</span>
                                        </div>
                                        }
                                    </>
                                    }
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}