import { Col, Container, Row } from "react-bootstrap";
import {
  // BarGraph,
  // LineGraph,
  Shimmer,
} from "../../Components/UI";
import { useEffect, useState } from "react";
import {
  CostIcon,
  ProfitIcon,
  RevenueIcon,
  TxnsIcon,
} from "../../Assets/Icon/svg/SvgIcons";
import "./Dashboard.scss";

const settingCard = [
  {
    icon: <RevenueIcon />,
    title: "Total Revenue",
    amount: "$30,000",
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="dashboard">
      <Container>
        <div className="dashboard__top">
          <h5>Dashboard</h5>
          <Row>
            {settingCard.map((item, index) => (
              <Col md={3} xs={6} key={index}>
                <div className="dashboard-card">
                  <span className="dashboard-card__icon">{item.icon}</span>
                  <h6>{item.title}</h6>
                  <h5 className="text-truncate">
                    {loading ? (
                      <Shimmer height={"20px"} width="150px" />
                    ) : (
                      `${item.amount}`
                    )}
                  </h5>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {/* <div className="dashboard__bottom">
          <Row>
            <Col md={6}>
              <BarGraph />
            </Col>
            <Col md={6}>
              <LineGraph />
            </Col>
          </Row>
        </div> */}
      </Container>
    </div>
  );
};

export default Dashboard;
