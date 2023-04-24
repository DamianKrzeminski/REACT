import React, { useEffect, useState} from 'react';
import './LeftContent.css';
import axios from "axios";

function LeftContent(){
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://json.wzium.ovh/mydata.json')
          .then(response => setData(response.data))
          .catch(error => console.error(error))
      }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return(
        <div className="LeftContentProfile">
            <section className='personalDataBox'>
                <span className='personalDataTextLabel'>Firstname:</span>
                <span className='personalDataText'>{data.firstName}</span>
            </section>
            <section className='personalDataBox'>
                <span className='personalDataTextLabel'>Lastanme:</span>
                <span className='personalDataText'>{data.lastName}</span>
            </section>
            <section className='personalDataBox'>
                <span className='personalDataTextLabel'>Group:</span>
                <span className='personalDataText'>{data.group}</span>
            </section>
            <section className='personalDataBox'>
                <span className='personalDataTextLabel'>Index Number:</span>
                <span className='personalDataText'>{data.indexNumber}</span>
            </section>
        </div>
    );
}

export default LeftContent;