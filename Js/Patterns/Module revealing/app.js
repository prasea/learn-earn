//Module Pattern Blueprint
// (function(){
//     //Declare private variables & functions
//     return{
//         //Declare private variables & functions.
//     }
// })()

const UICtrl = (function(){
    //Private Variable
    let text = 'Hello World';
    
    //Private Function
    function changeText(){
        document.querySelector('h1').textContent = text;
    }

    return{
        //Public Function
        callChangeText : function(){
            changeText();
            //Public Variable
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();