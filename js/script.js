new Vue({
    el: '#seccion',

    data:{
        mostrar:false,
        mensaje:'',
        resultado:false,
        
        fin:false,

        tiempo:'',
        
        juego:'',
        listaJuegos:[],

        listaPlataforma:[],
        
    },
    methods: {
        mostrarPregunta:function(n){
            if(n)
                this.mostrar=true;
            else
                this.mostrar=false;
                this.mensaje=this.mostrar ? '' : 'Gracias por participar';
                
        },
        mostrarResultado:function(){
            this.resultado = !this.resultado;
        },
        mostrarFIN:function(){
            this.mostrar=false;
            this.mensaje='';
            this.fin= !this.fin;
        },
        /* tiempo:function(horas){
            this.tiempo = horas;
        }, */
        agregarJuegos(){
            this.listaJuegos.push(this.juego);
            this.juego='';
        },
        plataforma:function(pla){
            this.listaPlataforma.push(pla);
        },
        
    },
    computed:{
        tiMe1(){
            return this.tiempo='Menos de 1hr';
        },
        ti1a2(){
            return this.tiempo='1hr a 2hr';
        },
        ti2a3(){
            return this.tiempo='3hr a 4hr';
        },
        ti3Ma(){
            return this.tiempo='3hr a 4hr';
        }
    }
})