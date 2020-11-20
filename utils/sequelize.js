const { Op } = require("sequelize");

function getFilterOptions({ filterField, filterValue }) {
    return {
        ...filterField && filterValue && {
            where: {
                [filterField]: {
                    [Op.substring]: filterValue
                }
            }
        }
    }
}

function getSortOptions({ sortField, sortDirection }) {
    return {
        ...sortField && sortDirection && {
            order: [
                [sortField, sortDirection],
            ]
        }
    }
}

function getPageOptions({ page, limit }) {
    return {
        ...page && limit && {
            offset: limit * (page - 1),
            limit: limit
        }
    }
}

module.exports = {
    getFilterOptions,
    getSortOptions,
    getPageOptions
};
