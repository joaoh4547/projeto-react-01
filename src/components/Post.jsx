import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({author, publishedAt, content}){
 
    const [comments, setComments] = useState([
        'Post Muito bacana hein?!'
    ])

    const [newComment,setNewComment] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{locale: ptBr})
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt,{
        locale: ptBr,
        addSuffix: true,
    })


    function deleteComment(comment){
        console.log(`Deletar comentário ${comment}`)
        setComments(comments.filter(c => c!==comment))
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewComment(event.target.value)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, newComment])
        setNewComment('')
    }

    const isNewCommentEmpty = newComment.length === 0

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
                        return <p key={line.content}>{line.content}</p>
                    }
                    if(line.type === 'link'){
                        return (
                            <p key={line.content}>
                                <a href="#">{line.content}</a>
                            </p>
                        )
                    }
                })}
           </div>
           <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment' 
                    placeholder='Deixe um Comentário'
                    onChange={handleNewCommentChange}
                    value={newComment}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >Publicar</button>
                </footer>
           </form>
           <div className={styles.commentList}>
            {
                comments.map((comment) => (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                ))
            }
           </div>
        </article>
    )
}
