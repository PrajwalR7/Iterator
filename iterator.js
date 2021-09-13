function outer(){
    let i = -1; 
    function inner(){
        return ++i;
    }
    return inner;
}

const use = outer();

class Stream{
    constructor (collection){
        this.collection = collection;
    }
    iterator(){
        let i = use();
        let isSet = false;
        try {
            if(this.collection[i] === undefined){
                var arr = Array.from(this.collection);
                isSet = true;
            }
        } catch (error) {
            throw "Collection has no element"
        }
        
        if(isSet === true){
            return arr[i];
        }
        return this.collection[i];
    }
    display(){
        let i = use();
        let isSet = false;
        try {
            if(this.collection[i] === undefined){
                var arr = Array.from(this.collection);
                isSet = true;
            }
        } catch (error) {
            throw new Error("Collection has no element"); 
        }
        if(this.collection[i] === undefined){
            var arr = Array.from(this.collection);
            isSet = true;
        }
        if(isSet === true){
            console.log(arr);
        }
        console.log(this.collection)
    }
}

module.exports = {
    Stream , outer
}