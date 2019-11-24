new Vue({
    el:'#vue-app',
    data:{
      Name:'osama',
      age:'20',
      x:'0',
      y:'0',
      a:'0',
      b:'0',
      error:false,
      success:false
    },
    methods:{
    add:function(inc){
      this.age+=inc;
    },
    subtract:function(dec){
      this.age-=dec;
    },
    updatexy:function(event){
      this.x=event.offsetX;
      this.y=event.offsetY;
    },
    click:function(){
      alert('you clicked mi');
    }
  
  },
    computed:{
      addToA:function(){
        console.log('addToA');
    return this.a + this.age;
    },
    addToB:function(){
      console.log('addToB');
      return this.b + this.age;
    }
  }
  });
  
           /*looping v-for*/
  
  new Vue({
    el:'#vue-app1',
    data:{
  characters:['Osama','Mohammed','Ahmed','Husen'],
  emps:[
    {name:'Osama',age:22},
    {name:'Ahmed',age:21},
    {name:'Subry',age:20}
  ]
  }
  });
  
           /* multiple vue instans*/
  var one= new Vue({
    el:'#vue-app-one',
    data:{
  title:'vue app one'
    },
    methods:{
  
    },
    computed:{
  greet:function(){
    return 'Hello to vue one'
  }
    }
  });
  var two=new Vue({
    el:'#vue-app-two',
    data:{
  title:'vue app two'
    },
    methods:{
  changetitle:function(){
    one.title="title changed";
  }
    },
    computed:{
      greet:function(){
        return ' this is vue two'
      }
    }
  });
  Vue.component('greeting',{
    template:'<p>hello my name is {{name}} . <button v-on:click="changeName">change name</button></p>',
    data:function(){
      return {
        name:'osama'
      }
    },
    methods:{
      changeName:function(){
        this.name='ahmed'
      }
    }
  });
  new Vue({
    el:'#Vue-app-1'
  });
  new Vue({
    el:'#Vue-app-2'
  });
  