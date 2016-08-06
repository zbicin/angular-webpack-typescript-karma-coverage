import * as Transformer from '../transformer';

export class AppController {
    private input: string;
    private method: string;
    private result: string;

    public constructor(private transformer: Transformer.ITransformerService) {
        this.method = 'toLowerCase';
        this.input = 'Input some chars';
    }

    public transform() {
        if (this.method === 'toLowerCase') {
            this.result = this.transformer.toLowerCase(this.input);
        }
        else if (this.method === 'toUpperCase') {
            this.result = this.transformer.toUpperCase(this.input);
        }
    }
}

angular.module('app')
    .controller('AppController', AppController);