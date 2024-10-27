// scripts/fantasybattleschool.js - Core initialization script
class FantasyBattleSchoolSystem
{
    static SYSTEM_NAME = "fantasybattleschool";

    constructor()
    {
        console.log(`${FantasyBattleSchoolSystem.SYSTEM_NAME} System initialized.`);
    }

    static initialize()
    {
        Hooks.once('init', async () =>
        {
            console.log(`Initializing ${FantasyBattleSchoolSystem.SYSTEM_NAME} System...`);
            CONFIG.Actor.documentClass = FBSActor;
            CONFIG.Item.documentClass = FBSItem;
            Actors.unregisterSheet("core", ActorSheet);
            Actors.registerSheet(FantasyBattleSchoolSystem.SYSTEM_NAME, FBSActorSheet, { makeDefault: true });
            Items.unregisterSheet("core", ItemSheet);
            Items.registerSheet(FantasyBattleSchoolSystem.SYSTEM_NAME, FBSItemSheet, { makeDefault: true });
        });

        Hooks.once('ready', async () =>
        {
            console.log(`${FantasyBattleSchoolSystem.SYSTEM_NAME} System ready.`);
        });
    }
}

// Initialize the system
FantasyBattleSchoolSystem.initialize();