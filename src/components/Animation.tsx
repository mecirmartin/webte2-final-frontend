import {CircularProgress, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import "../index.css";
import {formattedData} from "../helper/dataChanges";
import {Layer, Stage, Image, Line} from "react-konva";
import useImage from "use-image";
import car from "../images/auto.png";
import wheel from "../images/koleso.png";

interface Props {
  wheel_r: number;
  init: Array<number>;
}

interface DataProps {
  x: number;
  y: number;
}

const AppAnimation = ({wheel_r, init}: Props) => {
  const [data, setData] = useState<any>(null);
  const [lineData, setLineData] = useState<Array<number>>([]);

  useEffect(() => {
    formattedData(wheel_r, init).then((fetchData) => {
      setData(fetchData);
    });
  }, []);

  let increment = 1;

  const animateElements = (interval: number) => {
    //@ts-ignore
    lineRef?.current?.to({
      x: 0,
      y: 115,
    });
    //@ts-ignore
    lineRef2?.current?.to({
      x: 0,
      y: 111,
    });
    data.x3?.forEach((el: DataProps, i: number) => {
      const run = setTimeout(() => {
        setTimeout(() => {
          //@ts-ignore
          carRef?.current?.to({
            x: 650,
            y: -55 + el.y * 600,
          });
        }, 500);
        setTimeout(() => {
          //@ts-ignore
          leftRef?.current?.to({
            x: 223,
            y: 115 + (data.x1[i].y - wheel_r) * 150,
          });
        }, 500);
        setTimeout(() => {
          // @ts-ignore
          rightRef?.current?.to({
            x: 508,
            y: 115 + (data.x1[i].y - wheel_r) * 150,
          });
        }, 1000);
        //@ts-ignore
        lineRef?.current?.to({
          x: i * 10,
          y: 115,
        });
        //@ts-ignore
        lineRef2?.current?.to({
          x: i * 10,
          y: 111,
        });

        clearTimeout(run);
      }, interval * increment);
      increment = increment + 1;
    });
  };

  useEffect(() => {
    if (!data) return;

    const reducedData = data?.x3?.reduce(
      (acc: number[], x: DataProps, i: number) =>
        acc.concat([i * 2, 70 - x.y * (200 / wheel_r)]),
      []
    );

    setLineData(reducedData);

    const interval = data?.x1[1].x * 1000;
    let intervalTime = 3000;
    animateElements(interval);
    setInterval(() => {
      animateElements(interval);
    }, intervalTime);
  }, [data]);

  const carRef = React.useRef(null);
  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const lineRef = React.useRef(null);
  const lineRef2 = React.useRef(null);

  const CarImage = () => {
    const [image] = useImage(car);
    return (
      <Image
        ref={carRef}
        scaleX={-1}
        x={650}
        y={-55}
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

  return data ? (
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
            strokeWidth={6}
            lineJoin="round"
            stroke="black"
          />
          <Line
            ref={lineRef2}
            x={0}
            y={115}
            points={[-10000, 75, 0, 75]}
            strokeWidth={6}
            closed
            lineJoin="round"
            stroke="black"
          />
        </Layer>
      </Stage>
    </Grid>
  ) : (
    <CircularProgress color="secondary" />
  );
};

export default AppAnimation;
