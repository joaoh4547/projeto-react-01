import styles from './Post.module.css'

export function Post(props){
    return(
        <article className={styles.post}>
           <header>
                <div className={styles.author}>
                    <img 
                        src="https://github.com/joaoh4547.png" 
                        alt="Profile Image"
                        className={styles.avatar}
                    />
                    <div className={styles.authorInfo}>
                        <strong>John Due</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='12 de Janeiro às 19:35' dateTime="2024-01-12 19:35:45">Publicado há 1h</time>
           </header>
           <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 <a href='#'>jane.design/doctorcare</a></p>

            <p><a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a></p>
           </div>
        </article>
    )
}
