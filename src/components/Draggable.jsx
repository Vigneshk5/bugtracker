/** @format */

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button
      className="container mx-auto px-10 py-10 bg-slate-500"
      ref={setNodeRef}
      transform={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </button>
  );
}