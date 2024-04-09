export const handleDataCount = (e) => {
  const list = document.getElementsByClassName("odometer");
  for (let item of list) {
    console.log({ item });
    const countNumber = item.attributes["data-count"].value;
    item.innerHTML = countNumber;
  }
};
