// BlogModal.jsx
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { dashboardBlog } from "../../../Api/user.action";
import toast from "react-hot-toast";

const DashboardModal = ({ show, handleClose }: any) => {
  const [data,setData]= useState<any>();
  const getBlogData = async () => {
    const result: any = await dashboardBlog();
    if (result?.status === 200) {
      console.log("result", result);
      setData(result);
    } else {
      toast.error(result?.message);
    }
    console.log("result", result);
  };
  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data?.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DashboardModal;
