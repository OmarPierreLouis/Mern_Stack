import React from 'react';
import { useParams } from 'react-router-dom';

const EditAuthor = () => {
    const {id} = useParams();
    
    return (
        <div>
            <h1>Take 2</h1>
        </div>
    );
};

export default EditAuthor;