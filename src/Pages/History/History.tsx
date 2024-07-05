import { Container } from "react-bootstrap";
import { CustomTable, Shimmer } from "../../Components/UI";
import bnb from "../../Assets/Icon/bnb.svg";
import btc from "../../Assets/Icon/btc.svg";
import "./History.scss";
import { CopyIcon } from "../../Assets/Icon/svg/SvgIcons";
import { apiCallPost } from "../../ApiService/axios.service";
import { APIURL } from "../../utils/constant";
import { useEffect, useState } from "react";

const History = () => {
  const [totalTransaction, setTotalTransaction] = useState<number>(10);
  const [transaction, setTransaction] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  let timeout: any;
  const options = [
    { value: "all", label: "All" },
    { value: "buy", label: "Buy" },
    { value: "sell", label: "Sell" },
  ];

  const fields = [
    "S. No.",
    "Time",
    "Token",
    "From",
    "Profit",
    "Cost",
    "Revenue",
  ];

  const historyData = [
    {
      time: "3/6/2024, 10:35:03 AM",
      token: btc,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
    {
      time: "3/6/2024, 10:35:03 AM",
      token: bnb,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
    {
      time: "3/6/2024, 10:35:03 AM",
      token: bnb,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
    {
      time: "3/6/2024, 10:35:03 AM",
      token: btc,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
    {
      time: "3/6/2024, 10:35:03 AM",
      token: bnb,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
    {
      time: "3/6/2024, 10:35:03 AM",
      token: bnb,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
    {
      time: "3/6/2024, 10:35:03 AM",
      token: bnb,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
    {
      time: "3/6/2024, 10:35:03 AM",
      token: bnb,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
    {
      time: "3/6/2024, 10:35:03 AM",
      token: bnb,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
    {
      time: "3/6/2024, 10:35:03 AM",
      token: bnb,
      from: "0xajurnd75hf84l",
      profit: "-$23.48",
      cost: "$31.39",
      revenue: "$7.91",
    },
  ];

  useEffect(() => {
    fetchTrnxHistory();
    return () => clearTimeout(timeout);
  }, []);

  const fetchTrnxHistory = async (page?: number) => {
    try {
      setLoading(true);
      const response: any = await apiCallPost(
        APIURL["TRNX_HISTORY"],
        {},
        { limit: 10, page: page ? page : 1 }
      );
      if (response?.status == 200) {
        setTotalTransaction(response?.count);
        setTransaction(response?.updatedInfoArray);
        timeout = setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log("erorr", error);
    }
  };

  const handlePageChange = async (pageNumber: number) => {
    await fetchTrnxHistory(pageNumber);
    setPageNumber(pageNumber);
  };

  const handleCopy = (data: string) => {
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="history">
      <Container>
        <div className="history__top">
          <h5>History</h5>
          {/* <CustomSelect
            isSearchable={false}
            defaultValue={options[0]}
            options={options}
          /> */}
        </div>
        <CustomTable
          fields={fields}
          pagination
          count={totalTransaction}
          handlePageChange={handlePageChange}
        >
          {transaction?.length > 0 &&
            transaction.map((item: any, index: any) => (
              <tr key={index}>
                <td>
                  {loading ? (
                    <Shimmer height={"20px"} width="100px" />
                  ) : pageNumber > 1 ? (
                    (pageNumber - 1) * 10 + index + 1
                  ) : (
                    index + 1
                  )}
                </td>

                <td>
                  {loading ? (
                    <Shimmer height={"20px"} width="100px" />
                  ) : (
                    "3/6/2024, 10:35:03 AM"
                  )}
                </td>
                <td>
                  <span className="token-icon">
                    {loading ? (
                      <Shimmer height={"20px"} width="100px" />
                    ) : (
                      `${item?.token1}/${item.token2}`
                    )}
                    {/* <img src={usdt} alt="token-icon" /> */}
                  </span>
                </td>
                <td>
                  {loading ? (
                    <Shimmer height={"20px"} width="100px" />
                  ) : (
                    "0xajurnd75hf84l"
                  )}
                  <button
                    className="copy-btn"
                    onClick={() => {
                      handleCopy("0xajurnd75hf84l");
                      alert("Copied");
                    }}
                  >
                    {loading ? null : <CopyIcon />}
                  </button>
                </td>
                <td>
                  {loading ? (
                    <Shimmer height={"20px"} width="100px" />
                  ) : (
                    item.profit
                  )}
                </td>
                <td>
                  {loading ? (
                    <Shimmer height={"20px"} width="100px" />
                  ) : (
                    item.gasCost
                  )}
                </td>
                <td>
                  {loading ? (
                    <Shimmer height={"20px"} width="100px" />
                  ) : (
                    item.revenue
                  )}
                </td>
              </tr>
            ))}
        </CustomTable>
      </Container>
    </div>
  );
};

export default History;
