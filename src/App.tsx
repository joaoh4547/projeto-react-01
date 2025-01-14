import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


const posts = [
  {
      id: 1,
      author: {
          id: 1,
          name: 'João Henrique',
          avatarUrl: 'https://github.com/joaoh4547.png',
          role: "Developer"
      },
      content: [
          {
             type: 'paragraph',
             content: 'Fala galeraa 👋' 
          },
          {
              type: 'paragraph',
              content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
          },
          {
              type: 'link',
              content: 'jane.design/doctorcare'
          }
      ],
      publishedAt: new Date('2025-01-13 17:00:00')
  },
  {
      id: 2,
      author: {
          id: 2,
          name: 'Diego Fernandes',
          avatarUrl: 'https://github.com/diego3g.png',
          role: "Developer"
      },
      content: [
          {
             type: 'paragraph',
             content: 'Fala galeraa 👋' 
          },
          {
              type: 'paragraph',
              content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
          },
          {
              type: 'link',
              content: 'jane.design/doctorcare'
          }
      ],
      publishedAt: new Date('2025-01-13 09:00:00')
  }
]

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {
          posts.map(post =>(
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))
         }
        </main>
      </div>
    </div>
  )
}


