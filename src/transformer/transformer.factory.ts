namespace Transformer {
    export interface ITransformerService {
        toLowerCase(input: string): string;
        toUpperCase(input: string): string;
    }

    export class Transformer {
        toLowerCase(input: string): string {
            return input.toLowerCase();
        }

        toUpperCase(input: string): string {
            return input.toUpperCase();
        }
    }

    angular.module('transformer')
        .factory('transformer', () => new Transformer());
}