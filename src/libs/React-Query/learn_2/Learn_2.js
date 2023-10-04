import React, { useState } from 'react';
import PostsList1 from './pages/PostsList1';
import { useQueryClient } from '@tanstack/react-query';
import PostsList2 from './pages/PostsList2';
import Post from './pages/Post';
import { getPost } from './api/posts';
import { CreatePost } from './pages/CreatePost';

const Learn_2 = () => {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  const queryClient = useQueryClient();

  function onHoverPostOneLink() {
    queryClient.prefetchQuery({
      queryKey: ['posts', 1],
      queryFn: () => getPost(1),
    });
  }

  return (
    <>
      <div>
        <button onClick={() => setCurrentPage(<PostsList1 />)}>Posts List 1</button>
        <button onClick={() => setCurrentPage(<PostsList2 />)}>Posts List 2</button>
        <button onMouseEnter={onHoverPostOneLink} onClick={() => setCurrentPage(<Post id={1} />)}>
          First Post
        </button>
        <br />
        {currentPage}
        <button onClick={() => setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)}>
          New Post
        </button>
      </div>
    </>
  );
};

export default Learn_2;
