Database -> Database
Table -> Collection
Record -> Document

show dbs -> show all databases
use db_name -> switch/connect to db_name
cls -> clear screen
show collections -> show collections in a db
var var_name = value
var_name = another_value
var_name
<- another_name
help -> show all commands and their meanings
exit -> ext mongosh
db -> confirm current db
Db.collection_name -> connect to a collection
db.collection_name.insertOne() -> insert a single document
A collection doesn't have to exist to add record, just give a name and mongo all create the collection
db.collection_name.insertMany() -> insert multiple single document, use an array to hold the multiple record objects
db.coll_name.find() -> retrieve all?(first 20 records) records from a collection(behaves differently in app)
it -> iterate over the next 20 records
db.cool_name.find({field: value}) -> find and filter base on field-value
db.cool_name.find({field: value, field: value}) -> find and filter base on multiple field-value
db.cool_name.find({field: value, field: value}, {field: 1}) -> find and filter base on multiple field-value but return only the fields in the second object

db.cool_name.find({}, {field: 1}) -> find all documents but return only the fields in the second object

The filters applies also to findOne.

db.coll_name.find().count() -> retrieves number of documents
db.coll_name.find({field: value, field: value}).count() -> retrieves number of filtered documents
db.coll_name.find().limit(int) -> limits number of documents retrieved to int
db.coll_name.find().sort({field: 1}) -> retrieves documents and sort based on the provided field (1 = asc)
db.coll_name.find().sort({field: -1}) -> retrieves documents and sort based on the provided field (-1 = desc)

we can do find().sort().limit() or find().sort().count() or any other combination we want

Operators
$gt -> greater than
$lt -> less than
$gte -> greater than or equal
$lte -> less than or equal
$or -> filter and return documents where either field is true

db.coll_name.find({field: {$gt: value}}) -> retrieve all document filtered by provided field where the field is greater than the value

db.coll_name.find({field: {$gt: value}}{field: value}) -> the operation can be performed along with other filters

db.coll_name.find({$or : [{feild: value}, {feild: value}]})
