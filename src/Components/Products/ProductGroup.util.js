export const productGroup = (cardItem, addToCardItem) => {
  const exiting = cardItem.find((el) => el.id === addToCardItem.id);

  if (exiting) {
    return cardItem.map((cardItem) =>
      cardItem.id === addToCardItem.id
        ? { ...cardItem, quntity: cardItem.quntity + 1, totalPrice: cardItem.totalPrice + cardItem.Deal_of_the_Day }
        : cardItem
    );
  }

  return [...cardItem, { ...addToCardItem, quntity: 1, totalPrice: addToCardItem.Deal_of_the_Day }];
};
