import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string
  },
  content: {
    type: 'paragraph' | 'link';
    content: string
  }[],
  publishedAt: Date
}


  
export function Post({ author, publishedAt, content }:PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana SLK!'  
    ])

  const [newCommentText, setNewCommentText] =useState('')
    console.log(newCommentText);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()  
       
    setComments([...comments,newCommentText]);
    setNewCommentText('');    
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value); 
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigátorio')
  }
  
  function deleteComment(commentToDelete: string){
    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment != commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }
  
  const isNewCommentEmpty = newCommentText.length ===0;

  return (
    <article className={styles.post}>

      <header>        
        <div className={styles.author}>     
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>Adriano Oliveira</strong>
            <span>Business Analyst</span>            
            <span>{author.role}</span>
          </div>
        </div>

      
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>        
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>

        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        name='comment'
        placeholder="Deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
      {comments.map(comment=>{
        return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
        
      })}
      </div>
    </article>
  )
}