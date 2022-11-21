import React, { useState, useEffect } from 'react'
import FirstPageItem from './FirstPageItem';

const FirstPage = () => {
    const [data, setData] = useState([]);
    const url = 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0';

    const apiGet = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            });
    };

    useEffect(() => {
        apiGet();
    }, []);

    return (
        <div className='page1'>
            <div className="wrapper">
                <h1 style={{fontSize: '3rem', fontWeight: '500'}}>7Timer! API</h1>
                <div className="container">

                    <div className="row">
                        {data && data.dataseries && data.dataseries.map((element) => {
                            return element && <div className="col-md-4" key={element.timepoint} >
                                <FirstPageItem timepoint={element.timepoint} cloudcover={element.cloudcover} seeing={element.seeing} transparency={element.transparency} lifted_index={element.lifted_index} temp2m={element.temp2m} prec_type={element.prec_type} />
                            </div>
                        })}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FirstPage
