/** @format */

import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import BACKLOG from "../assets/backlog-svgrepo-com.svg";
import DEVELOPMENT from "../assets/development-gear-optimization-svgrepo-com.svg";
import PROGRESS from "../assets/progress.svg";
import DONE from "../assets/done.svg";

export default function DndFold() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable className="px-10 py-10  " id="draggable">
      #1: automatic dark/light mode switch
    </Draggable>
  );
  const draggable2 = (
    <Draggable className="px-10 py-10  " id="draggable2">
      automatic dark/light mode switch
    </Draggable>
  );
  return (
    <div className="rounded-sm">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="container px-10  py-10 bg-slate-300 mx-auto ">
          <p className="text-center text-2xl tracking-wide ">Issues</p>
          {!parent ? draggable : null}
        </div>

        <div className=" flex flex-row ">
          <div className="container flex flex-row mx-auto px-10 py-10 bg-slate-200">
            <img className=" px-1" src={BACKLOG} alt="BACKLOG" />
            BACKLOG
          </div>
          <div className="container flex flex-row px-10 py-10 bg-slate-200">
            <img className=" px-3" src={DEVELOPMENT} alt="DEVELOPMENT" />
            SELECTED FOR DEVELOPMENT
          </div>
          <div className="container flex flex-row mx-auto px-10 py-10 bg-slate-200">
            <img className="px-3" src={PROGRESS} alt="PROGRESS" />
            IN PROGRESS
          </div>
          <div className="container flex flex-row mx-auto px-10 py-10 bg-slate-200">
            <img className="px-3" src={DONE} alt="DONE" />
            DONE
          </div>
        </div>
        <div className=" flex flex-row ">
          <Droppable id="droppable1">
            {parent === "droppable1" ? draggable : "drop here!"}
          </Droppable>
          <Droppable id="droppable2">
            {parent === "droppable2" ? draggable : "drop here!"}
          </Droppable>
          <Droppable id="droppable3">
            {}
            {parent === "droppable3" ? draggable : "drop here!"}
          </Droppable>
          <Droppable id="droppable4">
            {parent === "droppable4" ? draggable : "drop here!"}
          </Droppable>
        </div>
      </DndContext>
    </div>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}
