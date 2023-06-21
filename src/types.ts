export interface AlgoliaFoodItem {
    SOURCE: string;
    "ITEM CARD NAME": string;
    "HER FOOD CATEGORY": string;
    "HER RANK": string;
    "Number of Items Analyzed": string;
    "% GREEN": string;
    "% YELLOW": string;
    "% RED": string;
    "USDA WBSCM ID": number;
    objectID: string;
    _highlightResult: {
        "ITEM CARD NAME": {
            value: string;
        };
    };
}