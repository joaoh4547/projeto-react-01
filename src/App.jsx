import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"
export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="John Due" 
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi illo iste vero quisquam ea nam! Possimus eveniet autem, iusto facere, corporis officiis, quasi consequatur veritatis maiores saepe assumenda aspernatur quia?"
          />
          <Post 
            author="John Smith" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic rem odio nihil eligendi quibusdam mollitia quam esse voluptas omnis non vero, magnam facere sapiente aut ratione rerum quas totam repudiandae!"
          />
        </main>
      </div>
    </div>
  )
}


