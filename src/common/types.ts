import {ChangeEvent} from "react";

export type InputEvent = ChangeEvent<HTMLInputElement>;
export type ChangeHandler = (e: InputEvent) => void;

export enum Status {
    new = 0,
    firstRepeat ,
    secondRepeat ,
    thirdRepeat ,
    fourthRepeat ,
    fifthRepeat ,
    learning ,
    learned ,
}

export enum Category {
    own = 0,
    t100 ,
    t1000 ,
    t3000 ,
    verbs,
    cities,
    house,
    food,
    money,
    movies,
    shopping,
    music,
    clothes,
}

export type Word = {
    id: number;
    status: Status;
    text: string,
    transcription: string,
    category: Category,
    audio: string,
}
