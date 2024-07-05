import { ReactNode } from "react";
import { Table } from "react-bootstrap";
import CustomPagination from "../CustomPagination/CustomPagination";
import { NoRecord } from "../../../Assets/Icon/svg/SvgIcons";
import "./CustomTable.scss";
import Shimmer from "../Shimmer/Shimmer";

const CustomTable = ({
  className,
  fields,
  children,
  noRecordFound,
  pagination,
  count,
  handlePageChange,
}: {
  className?: string;
  fields?: string[];
  sortbuttons?: boolean;
  children?: ReactNode;
  noRecordFound?: ReactNode;
  pagination?: boolean;
  count: number;
  handlePageChange?: any;
}) => {
  return (
    <div className="custom-table">
      <div className="custom-table__wrap">
        <Table responsive className={`custom-table__table ${className}`}>
          {fields && (
            <thead>
              <tr>
                {fields?.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {children || noRecordFound || (
              <tr className="no_record text-center border-0">
                <td colSpan={fields?.length}>
                  {noRecordFound || (
                    <div className="no_record_box ">
                      <NoRecord />
                      <h4>No Record Found</h4>
                    </div>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {pagination && (
        <div className="custom-table__pagination">
          <CustomPagination
            total={Math.ceil(count / 10)}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default CustomTable;
