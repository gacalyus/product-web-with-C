

export function VatAdded(params) {
    let value = 0;
    value = params * 118 / 100;
    value = value.toFixed(1);
    return value;
}
