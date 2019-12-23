module.exports = sequelize => {
    sequelize.query(`
        CREATE INDEX IF NOT EXISTS card_stats_index ON "Card" USING BTREE (atk, def, manacost);
        CREATE INDEX IF NOT EXISTS card_brin_index ON "Card" USING BRIN (id, creation_date);
    `);
};