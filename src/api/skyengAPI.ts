import axios from 'axios';

type MeaningWithSimilarTranslation = {
    meaningId: number;
    frequencyPercent: string;
    partOfSpeechAbbreviation: string;
    translation: Translation;
}

type AlternativeTranslation = {
    text: string;
    translation: Translation;
}

type Translation = {
    text: string;
    note: string;
}

type Image = {
    url: string;
}

type Example = {
    text: string;
    soundUrl: string;
}

export interface WordMeaning {
    id: string;
    wordId: number;
    text: string;
    images: Image[];
    examples: Example[];
    soundUrl: string;
    updatedAt: string;
    transcription: string;
    partOfSpeechCode: string
    translation: Translation;
    definition: Translation;
    alternativeTranslations: AlternativeTranslation[];
    meaningWithSimilarTranslation: MeaningWithSimilarTranslation[];
}

export interface PartialMeaning {
    previewUrl: string
    imageUrl: string
    translation: Translation;
    partOfSpeechCode: string
    id: string;
    soundUrl: string;
    transcription: string;
}

export interface Word {
    id: number;
    text: string;
    meanings: PartialMeaning[]
}

const URL = 'https://dictionary.skyeng.ru/api/public/v1';

async function getMeanings(ids: string[], updateAt?: Date, width?: string, quality?: number) {
    const idsToString = ids.join(',');
    const {data} = await axios.get<WordMeaning[]>(URL + '/meanings', {
        params: {
            ids: idsToString
        }
    });
    return data
}

export async function getMeaning(id: string) {
    const meanings = await getMeanings([id]);
    return meanings[0];
}

/**
 *
 * @param search
 * @param pageSize number of words like this
 * @param page
 */
export async function searchWordsByLetters(search: string, pageSize: number = 1, page?: number) {
    const params = {search, pageSize};
    const {data} = await axios.get<Word[]>(URL + '/words/search', {params});

    return data
}


export default {
    getMeanings, getMeaning, searchWordsByLetters
}
