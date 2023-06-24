import {
  Role,
  DateType,
  DiamondCode,
  Extension,
  PriceType,
  ItemType,
  Language,
  TextObjectType,
  URLType,
  Format,
} from './enums.ts';

export type Series = {
    resourceURI: string;
    name: string;
}

export type ComicSummary = {
    resourceURI?: string,
    name?: string
}

export type Characters = {
    available: number;
    collectionURI: string;
    items: Series[];
    returned: number;
}

export type CreatorsItem = {
    resourceURI: string;
    name: string;
    role: Role;
}

export type Creators = {
    available: number;
    collectionURI: string;
    items: CreatorsItem[];
    returned: number;
}

export type DateElement = {
    type: DateType;
    date: string;
}

export type Thumbnail = {
    path: string;
    extension: Extension;
}

export type Price = {
    type: PriceType;
    price: number;
}

export type StoriesItem = {
    resourceURI: string;
    name: string;
    type: ItemType;
}

export type Stories = {
    available: number;
    collectionURI: string;
    items: StoriesItem[];
    returned: number;
}

export type TextObject = {
    type: TextObjectType;
    language: Language;
    text: string;
}

export type URL = {
    type: URLType;
    url: string;
}

export type Comic = {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: null | string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: DiamondCode;
    ean: string;
    issn: string;
    format: Format;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: URL[];
    series: Series;
    variants: Series[];
    collections: ComicSummary[];
    collectedIssues: ComicSummary[];
    dates: DateElement[];
    prices: Price[];
    thumbnail: Thumbnail;
    images: Thumbnail[];
    creators: Creators;
    characters: Characters;
    stories: Stories;
    events: Characters;
}

export type ComicId = Pick<Comic, 'id'>

export type ApiResponseData = {
    data: {
        results: Comic[];
    };
}

export type Response<T> = {
    success: boolean;
    message: string | null;
    data: T | T[] | null;
}

export type CardsGridProps = {
    children: ReactNode;
    loading: boolean;
    error: string | null;
}

export type FetchDataState = {
    data: Comic[] | null;
    loading: boolean;
    error: string | null;
    setPage: (page: number) => void;
    page: number;
    perPage: number;
}

export type PaginationParams = {
    page: number;
    perPage: number;
};
