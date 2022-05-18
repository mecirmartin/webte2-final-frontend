export const formattedData = async () => {
  const data: string = await fetchData();
  const dataArray = data
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const lineArray = line.trim().split(" ").filter(Boolean);

      return {
        t: lineArray[0],
        x1: lineArray[1],
        x3: lineArray[2],
      };
    });

  return {
    x1: dataArray.map((line) => ({
      x: parseFloat(line.t),
      y: parseFloat(line.x1),
    })),
    x3: dataArray.map((line) => ({
      x: parseFloat(line.t),
      y: parseFloat(line.x3),
    })),
  };
};

const fetchApiData = {
  r: 2,
  initialValues: [0, 0, 0, 0],
} as any;

const fetchData = async () => {
  const res = await fetch("http://localhost/api", {
    method: "POST",
    headers: {
      Authorization: "c5b90ab4-d970-48cf-93e3-3f14a023b064",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fetchApiData),
  });
  return res.text();
};
