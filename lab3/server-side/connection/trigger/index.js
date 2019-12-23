

module.exports = sequelize => {
    sequelize.query(`
        CREATE OR REPLACE FUNCTION clear_decks()
            RETURNS trigger AS $$
        DECLARE 
            rec RECORD;
        BEGIN
            IF NEW.money < 0 THEN
                RAISE 'Money cannot be less than 0'; 
                RETURN OLD;
            END IF;
            IF NEW.money < OLD.money OR NEW.money > 10000
            THEN
                FOR rec IN SELECT id,cost FROM "Deck" WHERE "Deck".owner=OLD.id
                LOOP
                    IF rec.cost % 2 = 0 THEN
                        DELETE FROM "Deck" WHERE "Deck".id=rec.id;
                    END IF;
                END LOOP;
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