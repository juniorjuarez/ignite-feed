import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import React from "react";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post({ author, publishedAt, content }) {
  const publisheDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} hasBorder />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time
            dateTime={publishedAt.toISOString()}
            title={publisheDateFormatted}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>
        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          })}
        </div>
        <form action="" className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            placeholder="Deixe um comentário"
            className={styles.comment}
          ></textarea>
          <footer>
            <button type="submit" className={styles.button}>
              Comentar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
