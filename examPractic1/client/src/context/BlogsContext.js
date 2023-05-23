import { createContext, useContext, useState } from "react";

const BlogsContext = createContext();

export const BlogsContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogsContext.Provider value={[blogs, setBlogs]}>
      {children}
    </BlogsContext.Provider>
  );
};

export const useBlogsContext = () => useContext(BlogsContext);
