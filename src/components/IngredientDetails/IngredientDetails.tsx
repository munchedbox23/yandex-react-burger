import styles from "./IngredientDetails.module.css";
import IngredientDetail from "./IngredientDetail/IngredientDetail";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setDetailIngredient } from "../../services/features/modalIngredient/modalIngredientSlice";
import { IIngredientDetails } from "../../types/ingredient-types";
import { useGetIngredientsQuery } from "../../services/features/ingredients/ingredientsApi";

const IngredientDetails = () => {
  const { ingredientId } = useParams<string>();
  const { data: ingredients = [] } = useGetIngredientsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currIngredient = ingredients?.find(
      (item) => item._id === ingredientId
    );

    if (currIngredient) {
      dispatch(setDetailIngredient(currIngredient));
    }
  }, [ingredients, dispatch, ingredientId]);

  const detailIngredient = useAppSelector(
    (store) => store.modalIngredient.detailIngredient
  );

  const detailsList: IIngredientDetails[] = [
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
