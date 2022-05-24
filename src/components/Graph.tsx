import {CircularProgress} from "@mui/material";
import {useEffect, useState} from "react";
import {VictoryChart, VictoryLine} from "victory";
import {formattedData} from "../helper/dataChanges";

interface Props {
  wheel_r: number;
  init: Array<number>;
}

const AppGraph = ({wheel_r, init}: Props) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    formattedData(wheel_r, init).then((fetchData) => setData(fetchData));
  }, [wheel_r, init]);

  // console.log("data", data);
  return data ? (
    <VictoryChart width={1000} height={500}>
      <VictoryLine
        style={{
          data: {stroke: "#a6d1c9"},
          parent: {border: "2px solid #ccc"},
        }}
        data={data.x1}
        animate={{
          duration: 2000,
          onLoad: {duration: 2000},
        }}
      />
      <VictoryLine
        style={{
          data: {stroke: "#c43a31"},
          parent: {border: "2px solid #fff"},
        }}
        data={data.x3}
        animate={{
          duration: 2000,
          onLoad: {duration: 2000},
        }}
      />
    </VictoryChart>
  ) : (
    <CircularProgress color="success" />
  );
};

export default AppGraph;
