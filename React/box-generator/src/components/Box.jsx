import React, { useState } from 'react';

const Box = () => {
    let [color, setColor] = useState("");
    let [allBoxes, setAllBoxes] = useState([]);
    
    const addBox = (e)=> {
        e.preventDefault();
        let box = {color};
        setAllBoxes([...allBoxes,box]);
        setColor("");
    }
    return (
        < >
            <form onSubmit={addBox}>
                <div className='form-group mt-5'>
                    <label htmlFor=''></label>
                    <input onChange={ (e)=>{setColor(e.target.value)}}type="text" className="form-control" placeholder='Enter Color Here' value={color} />
                </div>
                    <button className="btn btn-dark mb-5 mt-5" type="submit">Add Box</button>
            </form>
            <div className="flex-box">
                {
                    allBoxes.map((giveBox,idx)=>{
                    return (
                    <div key={idx} className= "box-plate" style={{backgroundColor:giveBox.color, color:"white"}}>
                        {giveBox.color}
                    </div>
                    )
                    })
                }
            </div>
        </>
    )
}
export default Box; 