export type TIngredient = "bun" | "sauce" | "main";

export interface ITabs {
  id: number;
  type: TIngredient;
  typeName: string;
  value: string;
}

const tabs: ITabs[] = [
  {
    id: 1,
    type: "bun",
    typeName: "Булки",
    value: "one",
  },
  {
    id: 2,
    type: "sauce",
    typeName: "Соусы",
    value: "two",
  },
  {
    id: 3,
    type: "main",
    typeName: "Начинки",
    value: "three",
  },
];

export default tabs;
