import { Col, Container, Row } from "react-bootstrap";
import { CustomButton, Shimmer } from "../../Components/UI";
import { useEffect, useState } from "react";
import "./Dashboard.scss";
import {
  deleteBlog,
  updateBlog,
  userSpecifiedBlog,
} from "../../Api/user.action";
import DeleteModal from "./DeleteModal/DeletModal";
import EditModal from "./EditModal/EditModal";
import { setMyBlogData } from "../../Redux/userData/userData";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

const MyBlog = () => {
  const [loading, setLoading] = useState(true);
  const dispatch: Dispatch<any> = useDispatch<any>();
  const [data, setData] = useState<any>();
  const [deleteShowModal, setDeleteShowModal] = useState<boolean>(false);
  const [editShowModal, setEditShowModal] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [currentDescription, setCurrentDescription] = useState<string>("");

  const [selectedBlogId, setSelectedBlogId] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const fetchData = async () => {
    try {
      const response = await userSpecifiedBlog();
      setData(response?.data);
      dispatch(setMyBlogData(response?.data)) // Adjust the API endpoint as necessary
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleConfirmDelete = async () => {
    const blogId: any = {
      id: selectedBlogId,
    };
    console.log("data", data[0]._id);
    try {
      const response = await deleteBlog(blogId);
      console.log("response", response); // Adjust the API endpoint as necessary
      setDeleteShowModal(false);
      fetchData();
    } catch (error) {
      console.error("Error deleting dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateBlog = async (title: any, description: any) => {
    const blogId: any = {
      id: selectedBlogId,
      title,
      description,
    };
    console.log("data", data[0]._id);
    try {
      const response = await updateBlog(blogId);
      console.log("response", response); // Adjust the API endpoint as necessary
      setEditShowModal(false);
      fetchData();
    } catch (error) {
      console.error("Error edit dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id: any) => {
    setSelectedBlogId(id)
    setDeleteShowModal(true);
    console.log('setSelectedBlogId', id)
  };
  const handleEditClick = (id: any, title: string, description: string) => {
    setSelectedBlogId(id);
    setEditShowModal(true);
    setCurrentTitle(title);
    setCurrentDescription(description);
  };

  const handleCloseModal = () => {
    setDeleteShowModal(false);
    setEditShowModal(false);
    setSelectedBlogId(null);
  };

  return (
    <div className="dashboard">
      <Container>
        <div className="dashboard__top">
          <h5>My Blog</h5>
          <Row>
            {data?.map((item: any, index: any) => (
              <Col md={3} xs={6} key={index}>
                <div className="dashboard-card">
                  <h6>{item?.title}</h6>
                  <h5>
                    {loading ? (
                      <Shimmer height={"20px"} width="150px" />
                    ) : (
                      `${item?.description}`
                    )}
                    <CustomButton
                      text="Delete"
                      className="w-100"
                      onClick={() => handleDeleteClick(item?._id)}
                    />
                    <CustomButton
                      text="Edit"
                      className="w-100"
                      onClick={() =>
                        handleEditClick(
                          item?._id,
                          item?.title,
                          item?.description
                        )
                      }
                    />
                  </h5>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <DeleteModal
        show={deleteShowModal}
        onHide={handleCloseModal}
        onDelete={handleConfirmDelete}
      />
      <EditModal
        show={editShowModal}
        onHide={handleCloseModal}
        onUpdate={handleUpdateBlog}
        currentTitle={currentTitle}
        currentDescription={currentDescription}
      />
    </div>
  );
};

export default MyBlog;
