export const currentDate = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formatedDate = `${day}/${month}/${year}`;

  return formatedDate;
};
