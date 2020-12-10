import React from 'react';
import data from './metal.json'
import Counter from './Counter/Counter'
import './Block.css'

function Block() {

    const bands = data.map(({ band_name, origin, fans, formed, split, style }, i) => {
        return (
          <div className='block'>
                <h1>{band_name}</h1>
                <p>Origin: {origin}</p>
                <p>Fans: {fans}</p>
                <p>Formed: {formed}</p>
                <p>Split: {split}</p>
                <p>{style}</p>
                {checkCounter(split)}
          </div>
        )
      })
    return (
        <div className="bandsBlock">
          { bands }
        </div>
    )
}
function checkCounter(split){
    if (split == '-'){
        return(
            <Counter step={1}/>
        )
    }
}

export default Block