export declare class AppController {
    getNumbers(): Promise<{
        value: number;
        color: string;
    }[]>;
    getResult(): Promise<number>;
}
