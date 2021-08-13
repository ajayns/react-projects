import { memo } from "react";

export const TodoList = memo(({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
});
