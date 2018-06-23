(function(){
    var periods = document.querySelector('#periods');
    var sum     = document.querySelector('#sum');
    var calculate = document.querySelector('#calculate');


    var periodState = null;
    var sumState    = null;
    var result = [];

    // event listeners
    calculate.addEventListener('click', calculatAccounting)
    periods  .addEventListener('keyup', changePeriodState);
    sum      .addEventListener('keyup', changeSumState);
    
    function changePeriodState(e) {
        periodState = parseInt(this.value);
    }

    function changeSumState(e) {
        sumState =    parseInt(this.value);
    }

    function calculatAccounting(){
        var periods = [];
        var workingSumState = sumState;

        for (var i = 0; i < periodState; i++) {
            var sub = parseInt(Math.random() * workingSumState) / 15;
            workingSumState = parseInt(workingSumState - sub);
            
            if (i === periodState.length) {
                periods.push(sub);
                periods.push(workingSumState);  
            } else {
                periods.push(sub);
            }

            // workingSumState = workingSumState - sub;
        }

        
        var sum = 0;
        for (var i = 0; i < periods.length; i++) {
            sum += periods[i]
        }

        var resSum = sumState - sum;
        periods = periods.map(function(i){
            return i + resSum / periodState;
        });

        var sum = 0;
        for (var i = 0; i < periods.length; i++) {
            sum += periods[i]
        }
        
        document.querySelector('#result').innerHTML = '';
        document.querySelector('#result').innerHTML = '';

        for (var i = 0; i < periodState; i++) {
            document.querySelector('#result').innerHTML += '<p>' + parseInt(i + 1) + ' : ' + periods[i] + '</p>';
        }

        console.log(sum);
    }
})();