import { Col, Container, Row } from "react-bootstrap";
import { Shimmer } from "../../Components/UI";
import { useCallback, useEffect, useState } from "react";
import "./Dashboard.scss";
import { dashboardBlog, LikeBlogPost } from "../../Api/user.action";
import FullBlog from "../MyBlog/FullBlog/FullBlog";
import { LikeIcon } from "../../Assets/Icon/svg/SvgIcons";
import debounce from "debounce";

const Dashboard = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fullBlogModal, setFullBlogModal] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [currentDescription, setCurrentDescription] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<any>();
  const [sortOrder, setSortOrder] = useState<string>("latest"); 

  const fetchData = useCallback(async (query: string,order:string) => {
    try {
      const response = await dashboardBlog(query,order);
      setData(response?.data);
      console.log("response", response);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetchData = useCallback(
    debounce((query: string,order: string) => fetchData(query,order), 500),
    [fetchData]
  );

  useEffect(() => {
    setLoading(true); // Set loading to true when the query changes
    debouncedFetchData(searchQuery,sortOrder);
  }, [searchQuery,sortOrder, debouncedFetchData]);

  const handleCloseModal = () => {
    setFullBlogModal(false);
  };
  const handleReadMoreClick = (title: string, description: string) => {
    setCurrentTitle(title);
    setCurrentDescription(description);
    setFullBlogModal(true);
  };
  const handleLikeClick = async (_id: string) => {
    const blogId: any = {
      id: _id,
    };
    try {
      const result = await LikeBlogPost(blogId);
      await fetchData(searchQuery,sortOrder);
      console.log("result", result);

    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
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
            {data?.map((item: any, index: any) => (
              <Col md={3} xs={3} key={index}>
                <div className="dashboard-card">
                  <h3>{item?.title}</h3>
                  <h5>
                    {loading ? (
                      <Shimmer height={"20px"} width="150px" />
                    ) : (
                      `${item?.description.substring(0, 100)}`
                    )}
                    {item?.description.length > 100 && (
                      <button
                        onClick={() =>
                          handleReadMoreClick(item?.title, item?.description)
                        }
                      >
                        Read More
                      </button>
                    )}
                  </h5>
                  <div onClick={() => handleLikeClick(item?._id)}>
                    <LikeIcon />
                    {item?.likes}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <FullBlog
        show={fullBlogModal}
        onHide={handleCloseModal}
        title={currentTitle}
        description={currentDescription}
      />
    </div>
  );
};

export default Dashboard;
