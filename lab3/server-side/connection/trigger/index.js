

module.exports = sequelize => {
    sequelize.query(`
        CREATE OR REPLACE FUNCTION clear_decks()
            RETURNS trigger AS $$
        BEGIN
            IF NEW.money < OLD.money 
                OR NEW.money > 10000
                THEN
                DELETE FROM "Deck" WHERE "Deck".owner=OLD.id;
            END IF;
            RETURN NEW;
        END;
        $$ language plpgsql;

        DROP TRIGGER IF EXISTS clear_deck_of_poor_player ON "Player";

        CREATE TRIGGER clear_deck_of_poor_player
            BEFORE UPDATE
            ON "Player"
            FOR EACH ROW
            EXECUTE PROCEDURE clear_decks();
    `)
}