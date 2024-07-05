import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import "./CustomPagination.scss";

const CustomPagination = (props: {
  total?: number | undefined;
  handlePageChange: any;
}) => {
  return (
    <Pagination
      className="custom-pagination"
      prevIcon="&lt;"
      nextIcon="&gt;"
      total={props.total}
      // current={1}
      // hideOnSinglePage={false}
      defaultPageSize={1}
      onChange={props?.handlePageChange}
    />
  );
};

export default CustomPagination;
