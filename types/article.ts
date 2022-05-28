import { OutputData } from '@editorjs/editorjs'

export interface Article {
    id: number
    name: string,
    slug: string,
    previewImage: string,
    previewText: string,
    content: OutputData['blocks'],
    createdAt: string
    promotionDate?: string
    sale?: string,
    updatedAt: string
}

export type ArticlePreview = Omit<Article, 'content' | 'updatedAt'>

export interface ArticleCategory {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
}

export interface ArticlesCategoriesState {
    categories: ArticleCategory[] | null;
    loading: boolean;
    error: string | null;
    count: number;
    selectedId: number | null;
}

export interface GetArticlesCategoriesResponse {
    count: number;
    rows: ArticleCategory[];
}

export type CreateArticleDto = Omit<Article, 'id' | 'slug' | 'createdAt' | 'updatedAt'> & {categoryId: number}
