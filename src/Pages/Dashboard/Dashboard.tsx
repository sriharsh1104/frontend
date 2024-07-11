import { Col, Container, Row } from "react-bootstrap";
import { Shimmer } from "../../Components/UI";
import { useEffect, useState } from "react";
import {
  CostIcon,
  ProfitIcon,
  RevenueIcon,
  TxnsIcon,
} from "../../Assets/Icon/svg/SvgIcons";
import "./Dashboard.scss";
import { dashboardBlog } from "../../Api/user.action";
// import DashboardModal from "./DashboardModal/DashboardModal";

const settingCard = [
  {
    icon: <RevenueIcon />,
    title: "Total Revenue",
    description: "no body can challange jain don words",
  },

  {
    icon: <CostIcon />,
    title: "Total Cost",
    amount: "$30,000",
  },
  {
    icon: <ProfitIcon />,
    title: "Total Profit",
    amount: "$30,000",
  },
  {
    icon: <TxnsIcon />,
    title: "Total Txns",
    amount: "$30,000",
  },
];

const Dashboard = () => {
  // const [showModal, setShowModal] = useState(false);
  const [data,setData]= useState<any>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dashboardBlog();
        console.log('response', response.data) // Adjust the API endpoint as necessary
      setData(response?.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <Container>
        <div className="dashboard__top">
          <h5>Dashboard</h5>
          <Row>
            {data?.map((item:any, index:any) => (
              <Col md={3} xs={6} key={index}>
                <div className="dashboard-card">
                  <h6>{item.title}</h6>
                  <h5 className="text-truncate">
                    {loading ? (
                      <Shimmer height={"20px"} width="150px" />
                    ) : (
                      `${item.description}`
                    )}
                  </h5>
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
