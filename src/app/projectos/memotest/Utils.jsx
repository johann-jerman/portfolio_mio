"use client";
export const randomArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const hidennElements = (icons) => {
  icons.map((icon) => {
    let state = icon.props.className.includes("fa-solid")
      ? "fa-solid"
      : "fa-brands";

    // icon.props.className.remove("fa");
    console.log(icon);
    // console.log(icon.props);
  });
  return icons;
};

let elementToCompare = [];
let elementToWin = [];
export const compare = (id, icon) => {
  if (elementToCompare.length < 2) {
    elementToCompare.push({
      id,
      icon,
    });
  }
  if (
    elementToCompare.length == 2 &&
    elementToCompare[0].icon.id == elementToCompare[1].icon.id
  ) {
    if (elementToCompare[0].id != elementToCompare[1].id) {
      elementToWin.push(elementToCompare[0].id);
      elementToWin.push(elementToCompare[1].id);
    } else {
      elementToCompare[0].icon.classList.remove(
        `fa-${elementToCompare[0].icon.id}`
      );
      elementToCompare[0].icon.classList.add(`fa-question`);
      elementToCompare[1].icon.classList.remove(
        `fa-${elementToCompare[1].icon.id}`
      );
      elementToCompare[1].icon.classList.add(`fa-question`);
    }
  }
  if (
    elementToCompare.length == 2 &&
    elementToCompare[0].icon.id != elementToCompare[1].icon.id
  ) {
    elementToCompare[0].icon.classList.remove(
      `fa-${elementToCompare[0].icon.id}`
    );
    elementToCompare[0].icon.classList.add(`fa-question`);
    elementToCompare[1].icon.classList.remove(
      `fa-${elementToCompare[1].icon.id}`
    );
    elementToCompare[1].icon.classList.add(`fa-question`);
  }
  if (elementToCompare.length == 2) {
    elementToCompare = [];
  }
  return elementToWin.length;
};
