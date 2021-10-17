const ListItem = (param1: { item: string; idx: string }) => {
  return <li key={param1.idx}>{param1.item}</li>;
};

export default ListItem;
