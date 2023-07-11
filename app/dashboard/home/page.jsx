import React from 'react'
import styles from '@/styles'
import Search from '@/components/search'

const Home = () => {
  return (
    <div className={`${styles.innerWidth}`}>
      <Search />
    </div>
  )
}

export default Home