import * as React from "react";


import { TodoItem } from "./List";
import {
  List as VirtualizeList,
  AutoSizer,
  ListRowProps,
} from "react-virtualized";

interface Props {
  todos: TodoItem[];
}

const Todos = ({ todos }: Props) => {
  const renderRow = ({ index, key, style }: ListRowProps) => {
    return (
      <div key={key} style={style}>
        {todos[index].title}
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ width, height }) => {
        return (
          <VirtualizeList
            rowCount={todos.length}
            width={width}
            height={height}
            rowHeight={50}
            rowRenderer={renderRow}
          />
        );
      }}
    </AutoSizer>
  );
};

export default Todos;