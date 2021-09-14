function outer(){
    let i = -1; 
    function inner(){
        return ++i;
    }
    return inner;
}


class Stream{
    constructor (collection){
        this.flag = true;
        this.innerFunc = null;
        this.collection = collection;
    }
    iterator(){
        if(this.flag === true){
            this.innerFunc = outer();
            this.flag = false;
        }
        let i = this.innerFunc();
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