import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({author, publishedAt, content}){
 
    const [comments, setComments] = useState([ 1,2,3])

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{locale: ptBr})
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt,{
        locale: ptBr,
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault()
        console.log('Hello')
        setComments([...comments, comments.length+1])
    }

    return(
        <article className={styles.post}>
           <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
           </header>
           <div className={styles.content}>
               {content.map(line=> {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }
                    if(line.type === 'link'){
                        return (
                            <p>
                                <a href="#">{line.content}</a>
                            </p>
                        )
                    }
                })}
           </div>
           <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um Comentário'/>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
           </form>
           <div className={styles.commentList}>
            {
                comments.map(commentId => (
                    <Comment />
                ))
            }
           </div>
        </article>
    )
}
