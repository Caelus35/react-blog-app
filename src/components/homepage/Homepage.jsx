import React from 'react'


function Homepage() {
  return (
    <div className='bg-[url(/public/coolbackgrounds.png)] bg-cover min-h-screen'>
      <h1 className='text-4xl text-center py-2 font-mono text-purple-950'>Welcome to my blog!</h1>
      <div className='bg-indigo-200 w-70/100 flex center flex-col mx-auto min-h-screen p-8 text-center rounded-4xl'>
        <p className='font-mono text-2xl bg-blue-900/10 p-4'>We are a blog dedicated to keeping you informed about the latest in technology. </p>
        <ul>
          <li className='font-mono text-2xl py-3 bg-blue-900/10 p-4 '>We cover recent news about AI, industry trends, and technological advancments.</li>
          <li className='font-mono text-2xl  bg-blue-900/10 p-4 '>Check out articles from industry professionals.</li>
          <li className='font-mono text-2xl py-3  bg-blue-900/10 p-4 '>Explore project ideas, how-to guides, and expert advice.</li>
        </ul>
        {/*<image className='bg-[url(/public/computer2.jpg)] col-start-4 row-start-2 row-span-2 bg-no-repeat bg-cover'></image>*/}
      </div>
    </div>
    
  );
}

export default Homepage;