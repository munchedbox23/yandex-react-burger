import styles from "./IngredientDetails.module.css";
import IngredientDetail from "./IngredientDetail/IngredientDetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setDetailIngredient } from "../../services/features/modalIngredient/modalIngredientSlice";

const IngredientDetails = () => {
  const { ingredientId } = useParams();
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    const currIngredient = ingredients?.find(
      (item) => item._id === ingredientId
    );

    if (currIngredient) {
      dispatch(setDetailIngredient(currIngredient));
    }
  }, [ingredients, dispatch, ingredientId]);

  const detailIngredient = useSelector(
    (store) => store.modalIngredient.detailIngredient
  );

  const detailsList = [
    {
      id: 1,
      detailValue: detailIngredient?.calories,
      detailText: "Калории,ккал",
    },
    {
      id: 2,
      detailValue: detailIngredient?.proteins,
      detailText: "Белки, г",
    },
    {
      id: 3,
      detailValue: detailIngredient?.fat,
      detailText: "Жиры, г",
    },
    {
      id: 4,
      detailValue: detailIngredient?.carbohydrates,
      detailText: "Углеводы, г",
    },
  ];

  return (
    <div className={styles.detailsWrapper}>
      <img
        className={styles.image}
        src={detailIngredient?.image_large}
        alt={`Ингридиент: ${detailIngredient?.name}`}
      />
      <h4
        className={`${styles.ingredientName} text text_type_main-medium mt-4 mb-8`}
      >
        {detailIngredient?.name}
      </h4>
      <div className={styles.detailsWrapper}>
        <ul className={styles.detailsList}>
          {detailsList.map((detail) => (
            <li key={detail.id}>
              <IngredientDetail
                detailValue={detail.detailValue}
                detailText={detail.detailText}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IngredientDetails;
