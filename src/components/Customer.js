import React, { useEffect, useState } from "react";
import { Layout } from "./Layout";
import Table from "./Table";

export const Customer = function (props) {
  const [tdata, setTdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8080/api/customer");
      const json = await data.json();
      setTdata(json);
    };
    fetchData();
  }, [tdata]);
  return (
    <Layout>
      <div className="max-w-7xl py-16 mx-auto">
        <Table
          heading="Customers"
          subHeading="List of Customer in Database"
          btnTxt="Add New Customer"
          tableData={tdata}
        ></Table>
      </div>
    </Layout>
  );
};
