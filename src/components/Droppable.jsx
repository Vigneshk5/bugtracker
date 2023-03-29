/** @format */

import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.9,
  };

  return (
    <div
      className="container px-10 py-40 bg-slate-400"
      ref={setNodeRef}
      style={style}
    >
      {props.children}
    </div>
  );
}
