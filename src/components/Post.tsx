import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'



interface Author{
    name: string
    role: string
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

interface PostProps{
    author: Author
    publishedAt: Date
    content: Content[]
}

export function Post({author, publishedAt, content}: PostProps){
 
    const [comments, setComments] = useState([
        'Post Muito bacana hein?!'
    ])

    const [newComment,setNewComment] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{locale: ptBR})
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })


    function deleteComment(comment: string){
        console.log(`Deletar comentário ${comment}`)
        setComments(comments.filter(c => c!==comment))
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewComment(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function handleCreateNewComment(event: FormEvent){
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
                        alt={`${author.name}'s Avatar`}
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
