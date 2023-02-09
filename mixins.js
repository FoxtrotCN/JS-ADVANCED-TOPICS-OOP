function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
}

const canSwim = {
    swim: function () {
        console.log('swim');
    }
};

function Person() {
}

const person = new Person();
console.log(person);

function GoldFish() {
}

const goldFish = new GoldFish();
console.log(goldFish);

mixin(Person.prototype, canEat, canWalk);
mixin(GoldFish.prototype, canEat, canSwim);

