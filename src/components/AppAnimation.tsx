import {Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import "../index.css";
import {formattedData} from "../helper/dataChanges";
import {Layer, Stage, Image, Line} from "react-konva";
import useImage from "use-image";
import car from "../images/auto.png";
import wheel from "../images/koleso.png";

const AppAnimation = () => {
  const [data, setData] = useState<any>(null);
  const [interval, setInterval] = useState<number>(1);
  const [lineData, setLineData] = useState<Array<number>>([]);

  useEffect(() => {
    formattedData().then((fetchData) => {
      setData(fetchData);
    });
  }, []);

  let increment = 1;

  const carRef = React.useRef(null);
  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const lineRef = React.useRef(null);

  const CarImage = () => {
    const [image] = useImage(car);
    return (
      <Image
        ref={carRef}
        scaleX={-1}
        x={650}
        y={-50}
        width={500}
        height={350}
        image={image}
      />
    );
  };

  const LeftWheelImage = () => {
    const [image] = useImage(wheel);
    return (
      <Image
        x={223}
        y={115}
        width={70}
        height={70}
        ref={leftRef}
        image={image}
      />
    );
  };

  const RightWheelImage = () => {
    const [image] = useImage(wheel);
    return (
      <Image
        x={508}
        y={115}
        width={70}
        height={70}
        ref={rightRef}
        image={image}
      />
    );
  };

  useEffect(() => {
    if (data) {
      setInterval(data?.x1?.[1]?.x * 1000);
      data.x1?.forEach((x: any, i: any) => {
        setLineData([...lineData, i * 2]);
        setLineData([...lineData, 70 - (x.y - 0.1) * 100]);
      });
      console.log("line data", lineData);

      data.x3?.forEach((el: any, i: any) => {
        const run = setTimeout(() => {
          //@ts-ignore
          carRef?.current?.to({
            x: 650,
            y: -50 + el.y * 1001,
          });
          //@ts-ignore
          leftRef?.current?.to({
            x: 223,
            y: 115 + data.x1[i].y * 10,
          });
          //@ts-ignore
          rightRef?.current?.to({
            x: 508,
            y: 115 + data.x1[i].y * 10,
          });
          //@ts-ignore
          lineRef?.current?.to({
            x: i * 10,
            y: 115,
          });

          clearTimeout(run);
        }, interval * increment);
        increment = increment + 1;
      });
    }
  }, [data]);

  return (
    data && (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop="1rem"
        marginBottom="1rem"
      >
        <Stage width={800} height={300}>
          <Layer>
            <CarImage></CarImage>
            <LeftWheelImage></LeftWheelImage>
            <RightWheelImage></RightWheelImage>
            <Line
              ref={lineRef}
              x={0}
              y={115}
              points={lineData}
              strokeWidth={1}
              fill="black"
              closed
              stroke="black"
            />
            <Line
              x={0}
              y={115}
              points={[0, 75, 800, 75]}
              strokeWidth={10}
              closed
              stroke="black"
            />
          </Layer>
        </Stage>
      </Grid>
    )
  );
};

export default AppAnimation;
