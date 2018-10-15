import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamago } from './tamago.js';


$(document).ready(function() {
    $("#status").hide();

    $("#name").submit(function(event){
        event.preventDefault();
        let name = $("#name-input").val();

        let userTamago = new Tamago (name);
    
        userTamago.setFood();
        userTamago.setPlay();
        userTamago.setSleep();
    
        $("#name-status").text(userTamago.getName());
        $("#food-status").text(userTamago.getFood());
        $("#play-status").text(userTamago.getPlay());
        $("#sleep-status").text(userTamago.getSleep());
        $("#life-status").text("Alive");
        $("#name").hide();
        $("#status").show();

        $("#food").click(function(){
            userTamago.foodMethod();
            $("#food-status").text(userTamago.getFood());
        });
    
        $("#play").click(function(){
            userTamago.playMethod();
            $("#play-status").text(userTamago.getPlay());
        });
    
        $("#sleep").click(function(){
            userTamago.sleepMethod();
            $("#sleep-status").text(userTamago.getSleep());
        });
    
        setInterval (function () {
            $("#food-status").text(userTamago.getFood());
            $("#play-status").text(userTamago.getPlay());
            $("#sleep-status").text(userTamago.getSleep());
            if (userTamago.getLife() === true) {
                $("#life-status").text("Alive");
            }
            else {
                $("#life-status").text("Dead")
            }
        }, 100);
    });

});
