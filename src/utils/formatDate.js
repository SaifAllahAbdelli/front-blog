const formatDate = (value) => {
  const formatedDate = new Date(value);

  const date = [
    formatedDate.getDate(),
    formatedDate.getMonth() + 1,
    formatedDate.getFullYear(),
  ].join("-");

  const time = [formatedDate.getHours(), formatedDate.getMinutes()].join(":");

  return [date, time];
};

export default formatDate;
