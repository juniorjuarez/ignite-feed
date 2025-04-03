import React from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "lucide-react";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/juniorjuarez.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContet}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jose Jurez</strong>
              <time dateTime="2023-05-11 08:13:30" title="11 de Maio às 08:13">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito boom, parabens</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={16} /> Aplaudir
            <span>15</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
