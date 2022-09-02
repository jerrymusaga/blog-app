import React from 'react'
import Feed from '../components/Feed'

const Home = ({posts}) => {
  return (
    <main className='Home'>
      {
        posts.length ? (
          <Feed posts={posts}/>
        ) : (
          <p style={{ marginTop: '2rem'}}>There is no post yet.</p>
        )
      }
    </main>
  )
}

export default Home