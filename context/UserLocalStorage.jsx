export const SetLocalStorage = (data) => {
  if (typeof window !== "undefined")
    localStorage.setItem("creitu_storage", JSON.stringify(data));
};

export const GetLocalStorage = () => {
  let data = "";

  if (typeof window !== "undefined")
    data = localStorage.getItem("creitu_storage");

  if (!data)
    data = JSON.stringify({
      user: {
        id: "",
        username: "",
        email: "",
        image: "",
      },
      loggedIn: "",
      isLoggedIn: false,
    });

  const parsedData = JSON.parse(data ? data : "");

  if (parsedData) return parsedData;

  return null;
};

export const UpdateLocalStorage = (id) => {
  if (!id) return;

  let data = "";

  if (typeof window !== "undefined")
    data = localStorage.getItem("creitu_storage");

  let parsedData = JSON.parse(data ? data : "");

  if (parsedData?.user?.id == id)
    parsedData = { ...parsedData, isLoggedIn: true };

  if (typeof window !== "undefined")
    localStorage.setItem("creitu_storage", JSON.stringify(parsedData));
};
