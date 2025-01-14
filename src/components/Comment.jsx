import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content,onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        console.log('Deletando comentário...')
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(state => state + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/joaoh4547.png"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>John Due</strong>
                            <time title='12 de Janeiro às 19:35' dateTime="2024-01-12 19:35:45">Cerca de 1h atrás</time>
                        </div>
                        <button 
                            title="Deletar Comentário"
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/> 
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}