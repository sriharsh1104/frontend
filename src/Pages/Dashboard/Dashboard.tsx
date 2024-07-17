import { Col, Container, Row } from "react-bootstrap";
import { Shimmer } from "../../Components/UI";
import { useEffect, useState } from "react";
import "./Dashboard.scss";
import { dashboardBlog, LikeBlogPost } from "../../Api/user.action";
import FullBlog from "../MyBlog/FullBlog/FullBlog";
import { LikeIcon } from "../../Assets/Icon/svg/SvgIcons";

const Dashboard = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [fullBlogModal, setFullBlogModal] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [currentDescription, setCurrentDescription] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const fetchData = async () => {
    try {
      const response = await dashboardBlog();
      setData(response?.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleCloseModal = () => {
    setFullBlogModal(false);
  };
  const handleReadMoreClick = (title: string, description: string) => {
    setCurrentTitle(title);
    setCurrentDescription(description);
    setFullBlogModal(true);
  };
  const handleLikeClick = async (_id: string) => {
    console.log("iddsadasdsad", _id);
    const blogId: any = {
      id: _id,
    };
    try {
      const result = await LikeBlogPost(blogId);
      console.log("LikePost", result);
      fetchData();

      // Update the UI to reflect the new like count if needed
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };
  return (
    <div className="dashboard">
      <Container>
        <div className="dashboard__top">
          <h5>Dashboard</h5>
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
                    <LikeIcon />{item?.likes}
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
