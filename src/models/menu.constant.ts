export enum MenuEnum {
    DAILY = 'daily',
    WEEKLY = 'weekly',
    MONTHLY = 'monthly',
}

export enum TitleEnum {
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
}

export type Menu = MenuEnum.DAILY | MenuEnum.WEEKLY | MenuEnum.MONTHLY;
