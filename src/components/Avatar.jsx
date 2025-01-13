import styles from './Avatar.module.css';

export function Avatar({src, hasBorder = true}){

    return (
         <img 
            src={src}
            alt="Profile Image"
            className={ hasBorder?  styles.avatarWithBorder: styles.avatar} 
        />
    )
}