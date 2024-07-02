import { Article as TArticle } from "../api/article/Article";

export const ARTICLE_TITLE_FIELD = "id";

export const ArticleTitle = (record: TArticle): string => {
  return record.id?.toString() || String(record.id);
};
