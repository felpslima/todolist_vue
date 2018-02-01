import Vue from "vue";
import App from "./App";

new Vue({
    el:"#app",
    components: { App },
    template: `<App :state="state"/>`,
    data:{
        state:{
            showDone: false,
            todos:[{
                text: "Almoço",
                done: true
            },
            {
                text: "Lanche",
                done: false
            },{
                text: "Janta",
                done: false
            }]
        }
    }
});