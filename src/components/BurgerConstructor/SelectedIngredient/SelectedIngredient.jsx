import { useDispatch } from "react-redux";
import styles from "./SelectedIngredient.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { removIngredient } from "../../../services/features/constructor/burgerConstructorSlice";
import { useDrop, useDrag } from "react-dnd";
import { useRef } from "react";
import { moveCard } from "../../../services/features/constructor/burgerConstructorSlice";

export const SelectedIngredient = ({ selectedIngredient, index }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const _id = selectedIngredient?.id;

  const [{ handlerId }, drop] = useDrop({
    accept: "sortIngredient",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (
        (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) ||
        (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)
      ) {
        return;
      }

      dispatch(moveCard({ dragIndex, hoverIndex }));
      item.index = hoverIndex;
    },
  });

  const [{ isDrag }, drag] = useDrag({
    type: "sortIngredient",
    item: () => {
      return { _id, index };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const handleDeleteIngredient = (index) => {
    dispatch(removIngredient(index));
  };
  return (
    <li
      ref={ref}
      data-handler-id={handlerId}
      className={`${styles.constructorItem} ${
        isDrag && styles.withOpacity
      } ml-2 mb-4`}
    >
      <div className={styles.drag}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={selectedIngredient?.name}
        price={selectedIngredient?.price}
        thumbnail={selectedIngredient?.image}
        extraClass={`${styles.centerBun}`}
        handleClose={() => handleDeleteIngredient(selectedIngredient.idx)}
      />
    </li>
  );
};
