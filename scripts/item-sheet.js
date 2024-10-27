// scripts/item-sheet.js - Custom Item Sheet Class
class FBSItemSheet extends ItemSheet
{
    get template()
    {
        return `systems/${FantasyBattleSchoolSystem.SYSTEM_NAME}/templates/item/item-sheet.html`;
    }

    getData()
    {
        const data = super.getData();
        return data;
    }
}