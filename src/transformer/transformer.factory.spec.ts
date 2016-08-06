describe('transformer', () => {
    let factory;

    beforeEach(() => {
        angular.mock.module('app.transformer');

        angular.mock.inject((transformer) => {
            factory = transformer;
        });
    });

    it('should transform to upper case correctly', () => {
        let result = factory.toUpperCase('foo');

        expect(result).toEqual('FOO');
    });
});