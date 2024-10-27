// scripts/item.js - Custom Item Class
class FBSItem extends Item
{
    prepareData()
    {
        super.prepareData();
        const data = this.data;
        if (data.type === "magic") {
            data.data.quantity = data.data.quantity || 0;
            data.data.power = data.data.power || 0;
        }
    }
}