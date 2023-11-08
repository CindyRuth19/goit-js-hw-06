const categoriesElements = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesElements.length);

categoriesElements.forEach((el) => {
  const categoryName = el.firstElementChild.textContent;
  console.log("Category:", categoryName);

  const categoryTypeList = el.lastElementChild;
  const categoryTypeLength = categoryTypeList.children.length;
  console.log("Elements:", categoryTypeLength);
});
