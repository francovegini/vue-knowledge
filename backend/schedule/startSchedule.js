const schedule = require('node-schedule');

module.exports = app => {
    schedule.scheduleJob('*/1 * * * *', async function () {
        const usersCount = await app.db('users').count('id').first();
        const categoriesCount = await app.db('categories').count('id').first();
        const articlesCount = await app.db('articles').count('id').first();
    })
}
