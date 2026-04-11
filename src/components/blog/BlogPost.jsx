import { useEffect , useState} from 'react';
import Content from './Content';
import Comments from './Comments';


function BlogPost(){
    const postContent={
        title:'My First Blog Post',
        content:'This is the content of my first blog post. Welcome to my blog! Hope you enjoy reading it.',
        author:'John Doe',
        date:'2026-03-20',
    };

    return (
        <div  className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8 mb-8">
            <Content
                title={postContent.title}
                content={postContent.content}
                date={postContent.date}
                author={postContent.author}
            />
            <Comments />
        </div>
    );
}

export default BlogPost;
