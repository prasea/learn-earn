//Storage Controller
const StorageCtrl = (function(){
    return{
        setItemsInLocalStorage: function(newItem){
            let items;
            //If LS is empty
            if(localStorage.getItem('items') === null){
                items = [];
                items.push(newItem);
                localStorage.setItem('items', JSON.stringify(items));
            } else{ //LS has items
                items = JSON.parse(localStorage.getItem('items'));
                items.push(newItem);
                localStorage.setItem('items', JSON.stringify(items));

            }
        },
        getItemsFromLocalStorage : function(){
            let items;
            if(localStorage.getItem('items')=== null){
                items = [];
            } else{
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateItemInLocalStorage : function(updatedItem){
            //Get items from LS in items Array of Object
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item,index){
                if(item.id === updatedItem.id){
                    items.splice(index,1,updatedItem);
                    // console.log(items); items Array is Updated.
                }
            });
            
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromLocalStorage : function(id){
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item,index){
                if(item.id === id){
                    items.splice(index,1);
                }
            });
            localStorage.setItem('items',JSON.stringify(items));
        },
        clearItemsFromLocalstorage :function(){
            localStorage.removeItem('items');
        }
    }

})();

//Item Controller
const ItemCtrl = (function(){
    //Item Constructor
    const Item = function(id,name,calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data Strucuture
    const data = {
        // items : [
        //     // {id:0, name: 'Chicken Dinner', calories : 1200},
        //     // {id:1, name: 'Eggs', calories : 400},
        //     // {id:0, name: 'Fish', calories : 200}
        // ],
        items : StorageCtrl.getItemsFromLocalStorage(),
        currentItem : null,
        totalCalories : 0

    }
    return{
        getItems : function(){
            return data.items;
        },
        addItem : function(newName, newCalories){
            //Getting PK ID of Last item in items Array & adding 1 to it.
            if(data.items.length > 0 ){
                newId = data.items[data.items.length - 1].id + 1;
            } else {
                newId = 0;
            }

            //Calories submitted through Form is String. Converting to Number
            newCalories = parseInt(newCalories);

            //To add these new Item to items Array, Use Item Constructor
            const newItem = new Item(newId, newName, newCalories);
            //newItem looks like : Item{id: ,name: , calories: }
            data.items.push(newItem);
            return newItem;
        },
        //Updates Item in Data Structure
        updateItem: function(nameTobeUpdated,caloriesTobeUpdated){
            //Our item Tobe Updated is Set on currentItem
            let found;
            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = nameTobeUpdated;
                    item.calories = caloriesTobeUpdated;
                    found = item;
                }
            });
            return found; //is an Object on Data Structure with updated value.

        },
        //Deletes item from Data Structure
        deleteItem : function(id){
            //id is Primary-key ID of item to be deleted Stored in currentItem

            //Get PK id of every item in Data Structure & Store in Array.
            const ids = data.items.map(function(item){
                return item.id;
            });

            //Get index of id to be deleted
            const index = ids.indexOf(id);

            //Remove item
            data.items.splice(index, 1);

        },
        //Called from AppCtrl itemEditClick() event listener
        getItemById: function(id){
            let found = null;
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found; //Item Object{id,name,calories }
        },
        setCurrentItem: function(itemToEdit){
            data.currentItem = itemToEdit
        },
        //Returns the values in currentItem
        getCurrentItem: function(){
            return data.currentItem;
        },
        getTotalCalories : function(){
            let total = 0;
            data.items.forEach(function(item){
                total += item.calories;
            });
            return total;
        },
        clearAllItems: function(){
            data.items = [];
        },
        //logData() is for Testing DataStructure values
        logData: function(){
            return data;
        }
    }
    
})();

//UI Controller
const UICtrl = (function(){
    const UISelectors = {
        itemList : '#item-list',
        addBtn : '.add-btn',
        updateBtn : '.update-btn',
		deleteBtn : '.delete-btn',
        backBtn : '.back-btn',
        clearBtn : '.clear-btn'
    }
    //Public Methods
    return{
        populateItemList : function(items){
            let html = '';
            items.forEach(function(item){
                html += `
                    <li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}:</strong><em>${item.calories}</em>
                        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    </li>
                `;
            });
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function(){
            return {
                name : document.querySelector('#item-name').value,
                calories : parseFloate(document.querySelector('#item-calories').value)
            }

        },
        addListItem: function(newItem){
            //Show the List which is hidden initally When 0 items in List.
            document.querySelector(UISelectors.itemList).style.display = 'block';
            
            const li = document.createElement('li');
            li.className = 'collection-item';
            //Add ID which is Dynamic
            li.id = `item-${newItem.id}`;
            //Add html
            li.innerHTML = `
                <strong>${newItem.name}: </strong> <em>${newItem.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item  fa fa-pencil"></i></a>
            `;
            //Insert item into UI
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
            
            /*
            Syntax: targetElement.insertAdjacentElement(position, element);
            
            -'beforebegin': Before the targetElement itself.
            -'afterbegin': Just inside the targetElement, before its first child.
            -'beforeend': Just inside the targetElement, after its last child.
            -'afterend': After the targetElement itself
            */
        },
        updateListItem : function(updatedItem){
            /*
                Logic: Grab all the List Items in UI using querySelectorAll(). Match the CSS id of each item in UI with the CSS id(item-${updatedItem.id}) of updatedItem
            */
            let listItems = document.querySelectorAll('#item-list li');
            
            //listItems is NodeList[]. Turn to Array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');
                // console.log(`item-${updatedItem.id}`);
                if(itemID === `item-${updatedItem.id}`){
                    document.querySelector(`#${itemID}`).innerHTML =`
                        <strong>${updatedItem.name}: </strong> <em>${updatedItem.calories} Calories</em>
                        <a href="#" class="secondary-content"><i class="edit-item  fa fa-pencil"></i></a>
                    `;
                }
            })
        },
        deleteListItem : function(id){
            /*
            let listItems = document.querySelectorAll('#item-list li');
            
            //listItems is NodeList[]. Turn to Array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');
                if(itemID === `item-${id}`){
                    listItem.remove();
                }
            })
            */
           const idOfItemTobeDeleted = `item-${id}`;
           const itemTobeDeleted = document.getElementById(idOfItemTobeDeleted);
           //querySelector(`#${idOfItemTobeDeleted}`)
           itemTobeDeleted.remove();
        },
        setTotalCalories: function(total){
            document.querySelector('.total-calories').textContent = total;
        },
        addItemToForm: function(){
            document.querySelector('#item-name').value = ItemCtrl.getCurrentItem().name;
            document.querySelector('#item-calories').value = ItemCtrl.getCurrentItem().calories;

            //To enable Edit State after WE click Edit icon
            UICtrl.showEditState();
        },
        clearInput: function(){
            document.querySelector('#item-name').value = '';
            document.querySelector('#item-calories').value = '';
        },
        clearEditState : function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState : function(){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        //To remove <ul> Line when there are no <li> elements
        hideList : function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        removeItems : function(){
            let listItems = document.querySelectorAll('#item-list li');

            //Turn NodeList to Array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItem){
                listItem.remove();
            });
        },
        getUISelectors: function(){
            return UISelectors;
        }
    }
    
})();

//App Controller
const  App = (function(StorageCtrl,ItemCtrl,UICtrl){
    //Load all Event Listners
    const loadEventListeners = function(){

        //Getting UISelectors which is Private in UICtrl Using Public method getUISelectors()
        const UISelectors = UICtrl.getUISelectors();

        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        //Disable Enter key functionality to Submit.
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        });
        
        //Edit icon click event 
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
        
        //Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        //Back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        //Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        //Clear All button Click event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
    }

    const itemAddSubmit = function(e){
        //Get Form Input values for Validation
        const input = UICtrl.getItemInput();
        
        //Validating item Name & Calories 
        if(input.name !== '' & input.calories !== ''){
            //Add the Submitted new Item to Data Structure
            const newItem = ItemCtrl.addItem(input.name,input.calories);

            //Add item to UI list in UICtrl
            UICtrl.addListItem(newItem);

            //Get & Set totalCalories
            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.setTotalCalories(totalCalories);

            //Store in LS
            StorageCtrl.setItemsInLocalStorage(newItem);
            // Clear Input Fields after new Item is added to UI
            UICtrl.clearInput();
        }
        e.preventDefault();
    }

    //When Edit icon is Clicked
    const itemEditClick = function(e){
        if(e.target.classList.contains('edit-item')){
            //WE wanna set the item WE wanna edit to currentItem 

            //Get list item CSS id :item-0, item-1, ... 
            const listId = e.target.parentNode.parentNode.id;

            //Break into an Array ["item", "id"]
            const listIdArr = listId.split('-');
            
            //Grab PK id from listIdArr
            const id = parseInt(listIdArr[1]);

            //Get item WE wanna edit
            const itemToEdit = ItemCtrl.getItemById(id);

            //Set currentItem to itemToEdit
            ItemCtrl.setCurrentItem(itemToEdit);

            //Display item to edit on Form
            UICtrl.addItemToForm();
        }
    }
    //When "Update Meal" button is Clicked
    const itemUpdateSubmit = function(e){
        //Get the item Value from Form
        const input = UICtrl.getItemInput();

        //Update item in Data Structure
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        //Update item  in UI
        UICtrl.updateListItem(updatedItem);
       
        //Get & Set totalCalories
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.setTotalCalories(totalCalories);

        //Update items in LS
        StorageCtrl.updateItemInLocalStorage(updatedItem);


        UICtrl.clearEditState();

        e.preventDefault();

    }

    //When "Delete Meal" button is Clicked
    const itemDeleteSubmit = function(e){
        //Get currentItem
        const currentItem = ItemCtrl.getCurrentItem(); 
        
        //Delete item from Data Structure
        ItemCtrl.deleteItem(currentItem.id);//WE have passed Primary-Key Id Not CSS Id.

        //Delete item from UI
        UICtrl.deleteListItem(currentItem.id);
        
        //Get & Set totalCalories
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.setTotalCalories(totalCalories);

        //Delete items from LS
        StorageCtrl.deleteItemFromLocalStorage(currentItem.id);

        //Get rid of Edit State after Update success
        UICtrl.clearEditState();

		e.preventDefault();
    }

    //When "Clear All" button is Clicked
    const clearAllItemsClick = function(e){
        //Delete all items from Data structure
        ItemCtrl.clearAllItems();
                
        //Remove every items from UI
		UICtrl.removeItems()
 
        //Get & Set totalCalories
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.setTotalCalories(totalCalories);

        //Remove items from LS
        StorageCtrl.clearItemsFromLocalstorage();
        e.preventDefault();
    }

    //PUBLIC methods
    return {
        init: function(){
            //Clear edit state/ Set initial state	
            UICtrl.clearEditState();
            
           //Get items from Data Structure
            const items = ItemCtrl.getItems();
           
           

           //Check if <ul> has any items
           if(items.length === 0){
               UICtrl.hideList();
               
           } else{
                //<ul id="item-list"> </ul>
                UICtrl.populateItemList(items);
           }
            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.setTotalCalories(totalCalories);

            //Call LoadEventListeners
            loadEventListeners();
        }
    }
    
})(StorageCtrl,ItemCtrl, UICtrl);

//Initializing Application
App.init();
