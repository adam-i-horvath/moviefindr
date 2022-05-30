import { CardProps } from '../MovieCard/Schema';

export const LocalStorage = (props: CardProps) => {
  var oldValues = JSON.parse(
    localStorage.getItem('apex_demo_last_viewed_name') || '[]'
  );

  if (oldValues === '') oldValues = [];
  var title = props.name;
  var id = props.id;
  var date = Date.now();
  var container = {
    title: title,
    id: id,
    date: date,
  };
  localStorage.setItem('apex_demo_last_viewed_name', JSON.stringify(container));

  oldValues.push(container);
  localStorage.setItem('apex_demo_last_viewed_name', JSON.stringify(oldValues));
};
