let user = {
    'name' :'crystal',
    age : 30,
    email : 'crystal@gmail.com',
    'state location': 'berlin',
    blogs : ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
          console.log('logged in');
    },
    logout:function(){
        console.log('logged out');
    },
    logBlogs: function(){
         this.blogs
    }
};


user.age =35
console.log(user.name);
console.log(user);
console.log(user['state location']); //we use brackets when there is a space
let key = 'email';
console.log(user[key]); // we use brackets in this case also

user.login();
