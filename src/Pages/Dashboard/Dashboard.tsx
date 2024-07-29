import { Col, Container, Row } from "react-bootstrap";
import { Shimmer } from "../../Components/UI";
import { useCallback, useEffect, useState } from "react";
import "./Dashboard.scss";
import {
  dashboardBlog,
  LikeBlogPost,
  postComment,
} from "../../Api/user.action";
import { LikeIcon } from "../../Assets/Icon/svg/SvgIcons";
import debounce from "debounce";

const Dashboard = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<any>();
  const [sortOrder, setSortOrder] = useState<string>("latest");
  const [currentComment, setCurrentComment] = useState<string>("");
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  const [visibleCommentsPostId, setVisibleCommentsPostId] = useState<string | null>(null);

  const fetchData = useCallback(async (query: string, order: string) => {
    try {
      const response = await dashboardBlog(query, order);
      setData(response?.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetchData = useCallback(
    debounce((query: string, order: string) => fetchData(query, order), 500),
    [fetchData]
  );

  useEffect(() => {
    setLoading(true); // Set loading to true when the query changes
    debouncedFetchData(searchQuery, sortOrder);
  }, [searchQuery, sortOrder, debouncedFetchData]);

  const handleLikeClick = async (_id: string) => {
    const blogId: any = { id: _id };
    try {
      await LikeBlogPost(blogId);
      await fetchData(searchQuery, sortOrder);
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentComment(event.target.value);
  };

  const handleCommentSubmit = async (blogId: string) => {
    if (!currentComment) return;
    try {
      await postComment({ content: currentComment, blogId });
      setCurrentComment("");
      setActiveBlogId(null);
      await fetchData(searchQuery, sortOrder);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const toggleExpandPost = (id: string) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  const toggleCommentsVisibility = (id: string) => {
    setVisibleCommentsPostId(visibleCommentsPostId === id ? null : id);
  };

  return (
    <div className="dashboard">
      <Container>
        <div className="dashboard__top">
          <h5>Dashboard</h5>
          <div className="search-bar">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for blogs..."
            />
          </div>
          <div className="sort-options">
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="latest">Latest</option>
              <option value="mostLiked">Most Liked</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          <Row>
            {data?.map((item: any) => (
              <Col xs={12} key={item._id}>
                <div className="dashboard-card">
                  {visibleCommentsPostId === item._id ? (
                    <div className="comments-section">
                      {item?.comments?.map((comment: any) => (
                        <div key={comment?._id} className="comment">
                          <strong>{comment?.username}</strong> {/* Display username */}
                          <p>{comment?.content}</p>
                        </div>
                      ))}
                      <div className="comment-section">
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          value={currentComment}
                          onChange={handleCommentChange}
                        />
                        <button onClick={() => handleCommentSubmit(item._id)}>
                          Post
                        </button>
                      </div>
                      <button
                        onClick={() => setVisibleCommentsPostId(null)}
                        className="hide-button"
                      >
                        Hide
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3>{item?.title}</h3>
                      <h5>
                        {loading ? (
                          <Shimmer height={"20px"} width="150px" />
                        ) : expandedPostId === item._id ? (
                          item?.description
                        ) : (
                          `${item?.description.substring(0, 100)}`
                        )}
                        {item?.description.length > 100 && (
                          <button onClick={() => toggleExpandPost(item._id)}>
                            {expandedPostId === item._id
                              ? "Show Less"
                              : "Read More"}
                          </button>
                        )}
                      </h5>
                      <div onClick={() => handleLikeClick(item?._id)}>
                        <LikeIcon />
                        {item?.likes}
                      </div>
                      <button onClick={() => toggleCommentsVisibility(item._id)}>
                        {visibleCommentsPostId === item._id ? "Hide Comments" : "Reply"}
                      </button>
                    </>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
