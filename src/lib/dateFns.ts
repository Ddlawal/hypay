import moment from 'moment'

export const getDate = (date: string | Date, format?: string): string => moment(date).format(format)

export const isDateSame = (
    date1: string | Date,
    date2: string | Date,
    granularity: moment.unitOfTime.StartOf = 'day'
): boolean => {
    return moment(getDate(date1)).isSame(getDate(date2), granularity)
}

export const getDateFromDaysAgo = (noOfDays: number, format?: string) => {
    return moment().subtract(noOfDays, 'days').format(format)
}
