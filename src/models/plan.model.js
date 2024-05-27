export default class PlanModel{
    constructor(id, name, description, price, imgUrl){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl
    }

    static get(){
        return plans;
    }

}

var plans = [
    new PlanModel(1, "Vegetarian Delight", "A plant-based feast packed with fresh vegetables, legumes, and whole grains.", 225, "images/plan1.webp"),
    new PlanModel(2, "Balanced Bites", "A delicious selection of low-carb meals that are both satisfying and healthy.", 275, "images/plan2.webp"),
    new PlanModel(3, "Build your own", "Create a custom meal plan that perfectly fits your dietary preferences.", 350, "images/plan3.jpeg")
];
