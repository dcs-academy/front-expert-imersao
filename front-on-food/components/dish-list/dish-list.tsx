import Styles from "./dish-list.module.css";
import { Dish } from "@/components";
import { api } from "@/services";
import { useQuery } from "react-query";
import { DishType } from "@/types";
import { DishSkeleton } from "@/components";
import { DishListProps } from "./type";

export function DishList(props: DishListProps) {
  const fetchDishes = async () => {
    const response = await api.get<DishType[]>(
      `/deliveries?city=${props.citySlug}`
    );
    return response.data;
  };

  const { data, isFetching } = useQuery<DishType[]>("dishes", fetchDishes);

  return (
    <div className={Styles.list}>
      {isFetching ? (
        <DishSkeleton />
      ) : (
        data?.map((dish) => <Dish key={dish.id} {...dish} />)
      )}
    </div>
  );
}
