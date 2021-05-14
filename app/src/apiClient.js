export const getBusinesses = async () => {
  const response = await fetch("/api/businesses");
  const jsonData = await response.json();

  console.log(jsonData);

  return jsonData;
};

export const addBusiness = async (name, city, country, lift) => {
  const response = await fetch("/api/businesses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, city, country, lift }),
  });
  return response.json();
};
