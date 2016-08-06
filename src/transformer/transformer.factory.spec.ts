namespace Transformer {
    describe('transformer', () => {
        it('should transform to upper case correctly', () => {
            let transformer = new Transformer();

            let result = transformer.toUpperCase('foo');

            expect(result).toEqual('FOO');
        });
    });
}