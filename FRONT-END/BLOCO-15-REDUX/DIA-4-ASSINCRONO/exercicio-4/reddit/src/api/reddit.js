// api/reddit.js
const fetchPosts = async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const { data } = await response.json();
    return data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
    }));
  };
  
  export default fetchPosts;