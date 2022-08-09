import { Part } from "../types/part";
import { Volume } from "./volume";
export interface Manga {
    index: number;
    title: string;
    titleJP: string;
    titleJPRomaji: string;
    Part: Part;
    Volume: Volume;
    link: string;
    wikiLink: string;
}