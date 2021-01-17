import React from 'react';
import styles from './postlist.module.scss';
import { IPost } from '../../interfaces';
import { PostItem } from './PostItem';

export const PostList = ({posts}: {posts: IPost[]}) => (
  <ul className={styles.postslist}>
    {posts.map(({id, date, title}) => (
      <PostItem id={id} date={date} title={title}/>
    ))}
  </ul>
);
