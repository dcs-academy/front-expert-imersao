import Styles from "./dish-details.module.css";
import { DishDetailsProps } from "./types";
import { IconDelivery, IconCategory, IconReviews } from "@/icons";

export function DishDetails({ type, subtitle, title }: DishDetailsProps) {
  const Icon =
    type === "delivery"
      ? IconDelivery
      : type === "category"
      ? IconCategory
      : IconReviews;

  return (
    <div className={Styles.detail}>
      <div className={Styles.icon}>
        <Icon />
      </div>
      {subtitle && <span>{subtitle}</span>}
      {title}
    </div>
  );
}
