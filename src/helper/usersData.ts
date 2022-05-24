export const getUsers = async () => {
  const res = await fetch("https://site128.webte.fei.stuba.sk/api/user", {
    method: "GET",
    headers: {
      Authorization: "c5b90ab4-d970-48cf-93e3-3f14a023b064",
      "Content-Type": "application/json",
    },
    //   body: JSON.stringify({command: command}),
  });
  return res.json();
};

export const createUser = async (
  name: string,
  r: number,
  init: Array<number>
) => {
  const res = await fetch("https://site128.webte.fei.stuba.sk/api/user", {
    method: "POST",
    headers: {
      Authorization: "c5b90ab4-d970-48cf-93e3-3f14a023b064",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name: name, r: r, init_values: init}),
  });
  return res.json();
};
