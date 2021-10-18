export interface ICard {
    id: number;
    title: string;
    timeframes: ITimeFrames;
}

export interface ITimeFrames {
    daily: IFrames;
    weekly: IFrames;
    monthly: IFrames;
}

export interface IFrames {
    current: number;
    previous: number;
}
