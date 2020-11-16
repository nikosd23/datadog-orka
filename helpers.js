module.exports = {
    isSpecificRequest: ctx => {
        const { bodyAttributeA, bodyAttributeB } = Object.assign({}, ctx && ctx.request.body, ctx && ctx.request.query);
        return !!bodyAttributeA || !!bodyAttributeB;
    },
    header: (req, name) => {
        return req.headers[name.toLowerCase()];
    },
    getAccountId: ctx => {
        return this.header(ctx, 'account_id');
    },
    getUserId: ctx => {
        return this.header(ctx, 'user_id');
    }
}