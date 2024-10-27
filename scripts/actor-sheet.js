// scripts/actor-sheet.js - Custom Actor Sheet Class
class FBSActorSheet extends ActorSheet
{
    get template()
    {
        return `systems/${FantasyBattleSchoolSystem.SYSTEM_NAME}/templates/actor/actor-sheet.html`;
    }

    getData()
    {
        const data = super.getData();
        return data;
    }
}