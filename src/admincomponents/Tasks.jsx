import React, { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BsThreeDots } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";

import { tasks } from "../constants/TablesData";

const DraggableItem = ({ id, name, link, index, moveItem }) => {
	const [, ref] = useDrag({ type: "ITEM", item: { index } });
	const [checkedStatus, setCheckedStatus] = useState({});

	const handleCheckboxChange = (taskId) => {
		setCheckedStatus((prevStatus) => ({
			...prevStatus,
			[taskId]: !prevStatus[taskId],
		}));
	};

	const [, drop] = useDrop({
		accept: "ITEM",
		hover: (draggedItem) => moveItem(draggedItem.index, index),
	});

	return (
		<div ref={(node) => ref(drop(node))} className="cursor-pointer">
			<div className="capitalize flex items-center py-3 justify-between active:bg-black/5 dark:active:bg-white/5 active:rounded-lg active:px-2">
				<div className="flex items-center gap-2">
					<input
						type="checkbox"
						name={name}
						id={id}
						checked={checkedStatus[id] || false}
						onChange={() => handleCheckboxChange(id)}
						className="cursor-pointer w-3 2xl:w-4 aspect-square accent-primary"
					/>
					<label
						htmlFor={id}
						className={`text-xs 2xl:text-base font-semibold cursor-pointer select-none ${
							checkedStatus[id]
								? "text-black dark:text-white"
								: "text-textColor"
						}`}
					>
						{name}
					</label>
				</div>
				<div className="text-textColor 2xl:text-2xl cursor-pointer">
					<PiDotsSixVerticalBold />
				</div>
			</div>
		</div>
	);
};

const Tasks = () => {
	const [characters, setCharacters] = useState(tasks);

	const moveItem = (dragIndex, hoverIndex) => {
		const draggedItem = characters[dragIndex];
		const updatedCharacters = [...characters];
		updatedCharacters.splice(
			dragIndex,
			1,
			...updatedCharacters.splice(hoverIndex, 1, draggedItem)
		);
		setCharacters(updatedCharacters);
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div className="w-full h-auto bg-white dark:bg-dark-color p-6 rounded-2xl flex flex-col gap-8">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<input
							type="checkbox"
							name="name"
							id="name"
							className="cursor-pointer w-4 2xl:w-5 aspect-square accent-primary"
						/>
						<h2 className="capitalize 2xl:text-lg font-bold text-headingColor dark:text-white">
							Tasks
						</h2>
					</div>
					<div className="w-fit bg-primary/5 text-primary dark:text-white dark:bg-white/5 text-xl p-2 rounded-lg">
						<BsThreeDots />
					</div>
				</div>
				<div>
					{characters.map((item, index) => (
						<DraggableItem
							key={item.id}
							{...item}
							index={index}
							moveItem={moveItem}
						/>
					))}
				</div>
			</div>
		</DndProvider>
	);
};

export default Tasks;
