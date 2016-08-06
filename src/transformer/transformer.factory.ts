export interface ITransformerService {
    toLowerCase(input: string): string;
    toUpperCase(input: string): string;
}

export class TransformerService {
    constructor() { }

    toLowerCase(input: string): string {
        return input.toLowerCase();
    }

    toUpperCase(input: string): string {
        return input.toUpperCase();
    }
}

angular.module('app.transformer')
    .factory('transformer', () => new TransformerService());
