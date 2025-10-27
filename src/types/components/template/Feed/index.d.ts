import { HTMLAttributes } from 'react';

export interface FeedProps extends HTMLAttributes<HTMLDivElement> {
  posts: Array<{
    id: string;
    author: string;
    content: string;
    timestamp: string;
    comments?: number;
    likes?: number;
  }>;
  onCreatePost: (content: string) => void;
  onLogout: () => void;
  loading?: boolean;
}
