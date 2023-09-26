const container = document.querySelector('.container');
// creating elements
const createParagraphTag = document.createElement('p');
const createParagraphTag2 = document.createElement('p');
createParagraphTag3 = document.createElement('p');
console.log(createParagraphTag);
// adding text inside a p tag
createParagraphTag.innerText= 'I\'m a paragraph';
createParagraphTag2.innerText = 'Lol, Things dey happen'
createParagraphTag3.innerText = 'Mtcheew, things dey shele'
// Adding attributes
// createParagraphTag.setAttribute('class', 'p-tag');
// createParagraphTag2.setAttribute('class', 'p-tag2');
// createParagraphTag3.setAttribute('class', 'p-tag3')

// createParagraphTag2.style.color = 'cyan'

// Adding event listener to the p tags
// createParagraphTag.addEventListener('click', function(){
//   createParagraphTag2.remove();
// })
// Appending attributes
// container.append(createParagraphTag, createParagraphTag2, createParagraphTag3);
// container.appendChild(createParagraphTag2);
// container.appendChild(createParagraphTag3);
console.log(container);
const displayUserListofItems = document.querySelector('.displayUserListofItems');
const userinput = document.querySelector('#userinput');
const addlist = document.querySelector('.addlist');
const displayError = document.querySelector('#displayError')
// const userinputvalue = userinput.value
// const displayUserListofItems = document.querySelector('.displayUserListofItems')
function createElement(){
    if(userinput.value !== ''){
        // creating elements
    const userListAndDeleteUserListCont = document.createElement('div');
    const userList = document.createElement('p');
    const deleteUserList = document.createElement('button');
    const icon = document.createElement('i');
    const displaydate = document.createElement('p');
    const panddeletecont = document.createElement('div')
    const displayAlert = document.createElement('p')
    // setting attributes
    userListAndDeleteUserListCont.setAttribute('class', 'userListAndDeleteUserListCont');
    userList.setAttribute('class', 'userList');
    deleteUserList.setAttribute('class', 'deleteUserList');
    icon.setAttribute('class','far fa-trash-alt');
    displaydate.setAttribute('class', 'displaydate');
    displayAlert.setAttribute('class', 'displayAlert');
    // Adding text to the button
    // deleteUserList.innerText = 'delete';
    userList.innerText = userinput.value;

    // Appending
    deleteUserList.append(icon)
    // adding event listener to the delete user list button
    deleteUserList.addEventListener('click', function(){
        userListAndDeleteUserListCont.remove();
    });
        userListAndDeleteUserListCont.append(userList);

        userListAndDeleteUserListCont.append(displaydate);

        userListAndDeleteUserListCont.append(deleteUserList);
 
        displayUserListofItems.append(userListAndDeleteUserListCont);

        
        // userListAndDeleteUserListCont.append(userinput.value)
        console.log(displayUserListofItems);
        let date = new Date();

        let now = Date.now();
        console.log(now);
    
        let getYear = date.getFullYear();
    
        let getMonth = date.getMonth();
    
        let getDay = date.getDay();
    
        let getDate = date.getDate();
    
        displaydate.innerText = `${getYear} / ${getMonth + 1} / ${getDate} / ${getDay} `
    
    }
    // Making sure that if a list isnt inputed, an alert is shown to the user to input text.
    else{
        // alert('Please enter text');
        // console.log('enter a text');
        displayError.innerText = 'Please input in your list'
        userinput.addEventListener('click', function(){
            displayError.innerText = ''
        })
        // userListAndDeleteUserListCont = ''
    }
    
}
// Making sure that the list inputed is delted when the add list button is pressed
// const displaydate = document.querySelector('.displaydate')
function eraseUserInput(){
    userinput.value = ''
    // 
    
    
}
// Adding event listener to the add list button

    addlist.addEventListener('click', function(){
        createElement()
        eraseUserInput()
    })