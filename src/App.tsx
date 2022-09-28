import { Header } from './components/Header';
import {Post, PostProps} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

interface Posts extends PostProps {
  id: number
}


const posts:Posts[] = [
  {
    id:1,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/105682437?v=4",
      name: 'Adriano Oliveira',
      role: 'Founder Hybrid Theory'
    },
    content:[
      {type: 'paragraph', content:'Fala Galera!',},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Post 🚀'},
      {type: 'link', content:'Adriano Ferreira de Oliveira'},
    ],
    publishedAt: new Date('2022-09-17 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/105682437?v=4",
      name: 'Adriano Oliveira',
      role: 'Founder Hybrid Theory'
    },
    content:[
      {type: 'paragraph', content:'Fala Galera!',},
      {type: 'paragraph', content:'React nunca pensei que iria criar uma aplicação com ele! definitivamente formidável!'},
      {type: 'link', content:'Adriano Ferreira de Oliveira'},
    ],
    publishedAt: new Date('2022-09-16 20:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      {posts.map(post =>{
        return(
          <Post
          key={post.id}
          author={post.author}
          content ={post.content}
          publishedAt ={post.publishedAt}

         />
        )

      })}
      </main>
      </div>
    </div>
  )
}


