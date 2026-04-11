import React, {useEffect, useRef, useState} from 'react';
import IndividualComment from './IndividualComment';
import {useToggle} from '../../hooks/useToggle';

function Comments(){
    const [comment, setComment]=useState({
        name: "",
        content: ""
    });
    console.log(comment);

    const [commentList, setCommentList] = useState([]);

    const addComment = (comment) => {
        setCommentList([...commentList, comment])
    };

    const textboxRef=useRef();

    const focusOnCommentBox=()=>{
        textboxRef.current.focus();
    }

    useEffect(()=>{
        focusOnCommentBox();
    }, []);
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Comments</h2>
            <input 
            value={comment.name}
            onChange={(e) => setComment({...comment, name: e.target.value})}
            placeholder='Name' 
            className="w-full border border-gray-300 rounded-lg focus:outline-none p-3 mb-2 focus:ring-2 focus:ring-blue-400 resize-none"/>
            <textarea
            ref={textboxRef}
            value={comment.content}
            onChange={(e) => setComment({...comment, content: e.target.value})}
             placeholder="Add a comment" 
             className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none min-h-[80px]"
             />
            <button
             onClick={()=>addComment(comment)}
             type="submit" 
             className="bg-amber-400 px-6 py-2 rounded-2xl text-white hover:bg-amber-600 transition"
             >
                Submit
            </button>
            <h3 className='text-lg font-semibold mb-2 text-gray-700 py-2'>Existing Comments:</h3>
            <ul className='space-y-2 pl-4 list-disc text-gray-600'>
                {commentList.map((value, index) => (
                    <IndividualComment value={value}/>
                ))}
            </ul>
            <br />
        </div>

    );
}

export default Comments;