import React from 'react';
import ava from '../../Img/ava.jpg';

import s from './ProfInfo.module.css';



const ProfInfo = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.profInfo}>

                <div>
                    <img src={ava} className={s.avatar} alt="avatar" />
                </div>
                <div className={s.descript}>
                    <h3>Mr Bin</h3>
                    <p>Actor, comic</p>
                </div>

            </div>
            
            
        </div>
    )
}

export default ProfInfo;




