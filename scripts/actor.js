// scripts/actor.js - Custom Actor Class
class FBSActor extends Actor
{
    prepareData()
    {
        super.prepareData();
        const data = this.data;
        this.initializeAttributes();
    }

    initializeAttributes()
    {
        const attributes = {
            strength: 10,
            vitality: 10,
            magic: 10,
        };
        this.data.update({ attributes });
    }

    junctionMagic(magic)
    {
        this.data.data.attributes.strength += magic.power;
    }
}