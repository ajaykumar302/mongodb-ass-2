const {MongoClient} = require('mongodb');
const { mainModule } = require('process');
const url ='mongodb://127.0.0.1:27017/';

const client = new MongoClient(url);
console.log("created client");

async function main (){
await client.connect()
console.log('client connected...');
//1.Create a database , give it name like "Human_Resource".
const database = client.db('Human_Resorce');
//Create a collection inside this named "employes"
const employes = database.collection('employes');
//2.Query the collection "employee" and list all the documents.
await employes.insertMany([{
 
    "firstName": "John",
    "lastName": "Doe",
    "salary": "25000",
    "department": "HR",
    "lastCompany": "X",
    "lastSalary": "10000",
    "overallExp": "2",
    "contactInfo": "1234567890",
    "yearGrad": "2016",
    "gradStream": "CSE"
  },{
   
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
  },{
  
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"
  },{
  
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
  },{
  
    "firstName": "Jame",
    "lastName": "roh",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
  },{
   
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
  },{
  
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"
  },{
   
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
  },{
   
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
  },{
   
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
  },{
   
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"
  },{
   
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
  },{
   
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
  }])
//3.Query the collection "employee" and list the employees
// who are having salary more than 30000.

  const salary = await employes.findOne({
    "salary": {$gt : '30000'}
  })
  console.log(salary);
//4.Query the collection "employee" and list the employees who are having experience more than 2 years.

  const exp = await employes.findOne({
    "overallExp": {$gt : '2'}
  })
  console.log(exp);
  //5.Query the collection "employee" and list the employees who are graduated
  // after 2015 and having experience more than 1 year .

  const yearGrad = await employes.findOne({
    "yearGrad": {$gt : '2015'},
    "overallExp":{$gt:'1'}
  })
  console.log(yearGrad);
  //6.Query the collection "employee" and update the salary of the employee 
  //whose salary is greater than 70000 to 65000.

  const update = await employes.updateMany({
    salary:{$gt:"70000"}},
    {$set:{salary:"65000"}
  })
  console.log(update);
  //7.Delete all the documents from "employee" where last company is Y.
  const del = await employes.deleteMany({
    "lastCompany" : 'Y'
  })
  console.log(del);
}
main()