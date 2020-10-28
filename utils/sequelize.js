const { Op } = require("sequelize");

function getSearchOptions({ filterField, filterValue, sortField, sortDirection, page, limit }) {
    return {
        ...filterField && filterValue && {
            where: {
                [filterField]: {
                    [Op.substring]: filterValue
                }
            }
        },
        order: [
            [sortField, sortDirection],
            ['id', sortDirection]
        ],
        offset: limit * (page - 1),
        limit: limit,
    };
}

module.exports = {
    getSearchOptions
};
