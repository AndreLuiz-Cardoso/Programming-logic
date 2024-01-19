class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attackDescription = "";

        switch (this.type.toLowerCase()) {
            case "mage":
                attackDescription = "used magic";
                break;
            case "warrior":
                attackDescription = "used sword";
                break;
            case "monk":
                attackDescription = "used martial arts";
                break;
            case "ninja":
                attackDescription = "used shuriken";
                break;
            default:
                attackDescription = "used undefined attack";
        }

        const message = `The ${this.type} ${this.name} attacked using ${attackDescription}`;
        console.log(message);
    }
}

// Example usage
const hero1 = new Hero("Aragorn", 30, "warrior");
const hero2 = new Hero("Gandalf", 100, "mage");

hero1.attack();
hero2.attack();