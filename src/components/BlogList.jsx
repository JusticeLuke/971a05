import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useEffect } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  
  const [currentPage,setCurrentPage]=React.useState(1);
  const [currentPaginationData,setCurrentPaginationData] = React.useState(blogs.posts.slice(0, 15));
  const [pageSize, setPageSize] = React.useState(15);
  
  const updateRowsPerPage = (newSize) => {
    setPageSize(newSize);
    updatePosts();
  };
  const updatePage = (newPage) => {
    setCurrentPage(newPage);
    updatePosts();
  };
  const updatePosts = () => {
    let pageStart = (currentPage-1)*pageSize;
    let pageEnd = ((currentPage-1)*pageSize)+pageSize;
    setCurrentPaginationData(blogs.posts.slice(pageStart,pageEnd));
  };

  useEffect(() => {
    updatePosts();
  },[currentPage])
  
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
