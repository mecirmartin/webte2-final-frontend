export const formattedData = async (r: number, init: Array<number>) => {
  const data: string = await fetchData(r, init);
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

export const WHEEL_R = 0.1;

const fetchData = async (r: number, init: Array<number>) => {
  const res = await fetch(
    "https://site128.webte.fei.stuba.sk/api/main-calculation",
    {
      method: "POST",
      headers: {
        Authorization: "c5b90ab4-d970-48cf-93e3-3f14a023b064",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        r: r,
        initialValues: init,
      }),
    }
  );
  return res.text();
};

const fetchCalculation = async (command: string) => {
  const res = await fetch(
    "https://site128.webte.fei.stuba.sk/api/calculation",
    {
      method: "POST",
      headers: {
        Authorization: "c5b90ab4-d970-48cf-93e3-3f14a023b064",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({command: command}),
    }
  );
  return res.text();
};

export const calculationData = async (command: string) => {
  const data: string = await fetchCalculation(command);
  return data;
};

export const sendEmail = async () => {
  const res = await fetch("https://site128.webte.fei.stuba.sk/api/email", {
    method: "GET",
    headers: {
      Authorization: "c5b90ab4-d970-48cf-93e3-3f14a023b064",
      "Content-Type": "application/json",
    },
  });
};

export const deleteUser = (id: number) =>
  fetch(`https://site128.webte.fei.stuba.sk/api/user/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "c5b90ab4-d970-48cf-93e3-3f14a023b064",
      "Content-Type": "application/json",
    },
  });
