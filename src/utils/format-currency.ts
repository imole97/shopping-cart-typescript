const CURRENCY_FORMATTER = new Intl.NumberFormat('en-NG',{
    currency: 'NGN',
    style: 'currency',
    currencyDisplay: 'symbol'
})

export const formatCurrency = (number:number) => {
    return CURRENCY_FORMATTER.format(number)
}