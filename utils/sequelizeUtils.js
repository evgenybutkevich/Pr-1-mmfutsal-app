function getSearchOptions({ filterField, filterValue, sortField, sortDirection, page, limit }) {
    return {
        ...filterField && filterValue && { where: { [filterField]: filterValue } },
        order: [
            [sortField, sortDirection]
        ],
        offset: limit * (page - 1),
        limit: limit
    };
}

module.exports = {
    getSearchOptions
};
