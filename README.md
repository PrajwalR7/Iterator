# Collection-Iterator
## Description
When using a collection like list or set, we need to access each element using a loop and access and then apply certain functionality on each element \
Collection-Iterator saves you from implementing the code to access each element in the collection\
The best thing about Collection-Iterator is, you dont have to access all the elements at once and store it in a variable, instead you can access one element and then access another later in the code. **It is not only restricted to accessing the next elements, but the user can also access the previous element in sequential order**\
For example
```javascript
const newCollection = new Stream([4,5,6])
console.log("First element in the collection", newCollection.iterator()) //logs 4
//Other functionalities
console.log(newCollection.iterator()) //logs 5
console.log(newCollection.previous()) //logs 4
```
## Installation and Usage
Run ```npm install collection-iterator``` to install the package \
In your project run the following command to use the iterator 
```javascript
const { Stream } = require('collection-iterator')
```
This above command imports an function(Object) called Stream which has the required properties to run the iterator 
### Using Stream and new keyword
In order to use the iterator, we need to create an object with a property names collections which will store our array/list or set 
```javascript
const myCollection = new Stream([4,5,6])
```
Now we can run the iterator function which gives out each element as the output\

We can also pass a set as input
```javascript
const mySetCollection = new Stream({1,2,{a:10,b:20}});
```
## Package Info
### Author
Prajwal R
### License
MIT
