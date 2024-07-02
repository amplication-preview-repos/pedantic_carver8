import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
