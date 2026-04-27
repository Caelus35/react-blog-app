import React from 'react';
import { Link } from "react-router";

function PostList(){
    return <div className='grid grid-cols-3 grid-rows-2 row-span-full gap-5 p-5 min-h-screen'>
        <Link to="/posts/1" className='bg-radial from-purple-400 to-indigo-200 rounded flex items-center justify-center'>Post #1</Link>
        <Link to="/posts/2" className='bg-radial from-purple-400 to-indigo-200 rounded text-center flex items-center justify-center'>Post #2</Link>
        <Link to="/posts/3" className='bg-radial from-purple-400 to-indigo-200 rounded text-center flex items-center justify-center'>Post #3</Link>
        <Link to="/posts/4" className='bg-radial from-purple-400 to-indigo-200 rounded text-center flex items-center justify-center'>Post #4</Link>
        <Link to="/posts/5" className='bg-radial from-purple-400 to-indigo-200 rounded text-center flex items-center justify-center'>Post #5</Link>

    </div>
}

export default PostList;