import { CustomSelect } from "../../Formik/FormikFields";
import "./GraphFilter.scss";

const GraphFilter = () => {
  const options = [
    { value: "30days", label: "30 Days" },
    { value: "15days", label: "15 Days" },
    { value: "7days", label: "7 Days" },
    { value: "1day", label: "1 Day" },
  ];
  return (
    <div className="graph-filter">
      <h5>Graph</h5>
      <CustomSelect
        options={options}
        defaultValue={options[0]}
        isSearchable={false}
      />
    </div>
  );
};

export default GraphFilter;
