import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Label from "../Label/Label";
import { useRef, useState } from "react";
import { CalendarIcon } from "../../../../Assets/Icon/svg/SvgIcons";
import "../Input/Input.scss";
import "./CustomDatePicker.scss";

const CustomDatePicker = (props: {
  options?: any;
  menuIsOpen?: boolean;
  isSearchable?: boolean;
  defaultValue?: any;
  label?: string | number | undefined;
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const startRef = useRef<DatePicker<never, undefined>>(null);
  return (
    <div className="input dp-style">
      {props.label && <Label label={props.label} />}
      <div className="inner">
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
          className="input-control"
          ref={startRef}
          icon={
            <span onClick={() => startRef.current?.setOpen(true)}>
              <CalendarIcon />
            </span>
          }
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
