// Splits a list of strings into two lists with roughly the same number of characters
export const splitItems = (items) => {
    const rowA = [];
    const rowB = [];

    const addToRow = function () {
        let rowALength = 0;
        let rowBLength = 0;

        return (item) => {
            if (rowALength < rowBLength) {
                rowA.push(item);
                rowALength += item.length;
            }
            else {
                rowB.push(item);
                rowBLength += item.length;
            }
        }
    }();

    items.forEach(item => addToRow(item));
    return [rowA, rowB];
}