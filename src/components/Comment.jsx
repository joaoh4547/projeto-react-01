import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content}){
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
                        <button title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}