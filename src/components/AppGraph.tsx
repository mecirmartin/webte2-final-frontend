import {useEffect, useState} from "react";
import {VictoryChart, VictoryLine} from "victory";
import {formattedData} from "../helper/dataChanges";

const AppGraph = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    formattedData().then((fetchData) => setData(fetchData));
  }, []);

  return (
    data && (
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
    )
  );
};

export default AppGraph;
