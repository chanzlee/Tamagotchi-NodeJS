import { Tamago } from '../src/tamago.js';

describe ('Tamago', function (){
    let aj = new Tamago('aj');

    beforeEach(function(){
       jasmine.clock().install(); 
    });

    afterEach(function(){
        jasmine.clock().uninstall(); 
    });

    
    it ('User can have one Tamago.', function () {
        expect(aj.name).toEqual('aj');
    });

    it ('Tamago have name,food, play, sleep variables.', function () {
        expect(aj.food).toEqual(10);
        expect(aj.play).toEqual(10);
        expect(aj.sleep).toEqual(10);
    });

    it ('Every given interval, each variables decreases by one. .', function () {
        aj.setFood();
        aj.setPlay();
        aj.setSleep();
        jasmine.clock().tick(3001);
        expect(aj.food).toEqual(9);
        jasmine.clock().tick(2000);
        expect(aj.play).toEqual(9);
        jasmine.clock().tick(5000);
        expect(aj.sleep).toEqual(9);
    });

    it ('If one of variables becomes zero, Tamago will die.', function () {
        aj.setFood();
        jasmine.clock().tick(30001);
        expect(aj.getLife()).toEqual(false);
    });

    it ('When user clicks the linked button, each variable increases by one.', function() {
        aj = new Tamago("aj");
        aj.foodMethod();
        expect(aj.getFood()).toEqual(11);
        aj.playMethod();
        expect(aj.getPlay()).toEqual(11);
        aj.sleepMethod();
        expect(aj.getSleep()).toEqual(11);
    });
})