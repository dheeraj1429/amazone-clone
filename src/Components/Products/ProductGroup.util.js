export const productGroup = (cardItem, addToCardItem) => {
  const exiting = cardItem.find((el) => el.id === addToCardItem.id);

  if (exiting) {
    return cardItem.map((cardItem) => (cardItem.id === addToCardItem.id ? { ...cardItem, quntity: cardItem.quntity + 1 } : cardItem));
  }

  return [...cardItem, { ...addToCardItem, quntity: 1 }];
};
