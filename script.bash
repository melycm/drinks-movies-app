sequelize model:generate --name review \
  --attributes title:string,comments:string,rating:integer

sequelize model:generate --name movie \
  --attributes name:string,rating:integer

sequelize model:generate --name users \
  --attributes fname:string,lname:string,email:string,username:string,password:string
