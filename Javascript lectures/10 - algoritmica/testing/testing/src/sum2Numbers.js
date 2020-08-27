var alg = {
    sum: function(a, b) {
        return a + b;
    },
    sumArray: function(arr) {
        if(!arr)
            return 0;
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    numbersAreEqual(a,b)
    {
        return a === b;
    },

    numbersAreConsecutive: function(a,b)
    {
        return a === b+1;
    },

    convertArray: function(arr,option) {
        if(!arr)
            return [];
        if(arr.length==1)
        {
            return [1];
        }
        if(option == undefined)
        {
            option = 0;
        }
        var max = 1;    

        var responseArray = [];
        responseArray.push(max);

        for(var i=1;i<arr.length;i++)
        {
            var isConditionOk = false;
            console.log(option);
            switch(option)
            {
                case 0:{
                    isConditionOk = this.numbersAreEqual(arr[i],arr[i-1]);
                    break;
                }
                case 1:{
                    isConditionOk = this.numbersAreConsecutive(arr[i],arr[i-1]);
                    break;
                }
                default:
                {
                    //isConditionOk = this.numbersAreEqual(arr[i],arr[i-1]);
                }
            }
            if(isConditionOk)
            {
                max ++;
            }else{
                max = 1;
            }
            responseArray.push(max);
        }
        console.log(responseArray);
        return responseArray;
    },
    max: function(arr)
    {
        return Math.max.apply(null, arr);
    },
    positionOfMaxNumbers: function(arr){
        var max = this.max(arr);
        var response = [];
        var position = 0;
        while(position!= -1)
        {
           position = arr.indexOf(max,position);
           if(position>=0)
           {
            response.push(position);
            position++;
           }     
        }    
        return response;
    },
    biggestSequense: function(arr, option)
    {
        
        var response = [];
        var convertedArray = this.convertArray(arr, option);
        var max = this.max(convertedArray);
        var maxNumbers = this.positionOfMaxNumbers(convertedArray);

        for(var i=0;i<maxNumbers.length;i++)
        {
            var result = arr.slice(maxNumbers[i]-max+1, maxNumbers[i]+1);
            response.push(result);
        }

        return response;
    }
}

module.exports = alg;