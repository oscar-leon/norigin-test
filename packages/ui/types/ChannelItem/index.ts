export type Schedule = {
    id: string;
    title: string;
    start: string;
    end: string;
}

export type ChannelItem = {
    id: string;
    title: string;
    images: {
        logo: string;
    };
    schedules: Schedule[]
}
