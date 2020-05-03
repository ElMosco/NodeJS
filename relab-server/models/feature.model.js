module.exports = class Feature{
    constructor(id, geometry) {
        this.type = "Feature";
        this.properties = new Properties(id);
        this.geometry = geometry;
    }
}

class Properties
{
    costructor(id)
    {
        this.id = id;
    }
}