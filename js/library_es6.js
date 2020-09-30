class Book {
	constructor(name, author, type) {
		this.name = name;
		this.author = author;
		this.type=type;
	}
}

class Display {
	// let booklist from local storage and show book on page.
	addAndDisplay() {
		console.log("adding to UI");


		let hiddenId = document.getElementById('hiddenIdValue');
		if(hiddenId.value) {
	        addBtn.innerHTML = 'Update book';
	    } else  {
	        addBtn.innerHTML = 'Add book';
	    }

		let libraryObj;
		let libList = localStorage.getItem('library-list');
		if(libList == null) {
			libraryObj = [];
		} else {
			libraryObj = JSON.parse(libList);
		}
		let html='';
		libraryObj.forEach((element, index)=> {
			html += `
					<tr>
		              <td>${element.name}</td>
		              <td>${element.author}</td>
		              <td>${element.type}</td>
		              <td>
		              	<a id="${index+1}" onclick="editList(this.id)">
							<svg id="Layer_1" style="cursor:pointer;margin-right:10px;"  enable-background="new 0 0 512 512" height="15pt" viewBox="0 0 512 512" width="15pt" xmlns="http://www.w3.org/2000/svg"><g><g id="XMLID_224_"><g id="XMLID_225_"><g id="XMLID_226_"><g id="XMLID_227_"><g id="XMLID_228_"><g id="XMLID_229_"><g id="XMLID_230_"><g id="XMLID_231_"><g id="XMLID_232_"><g id="XMLID_233_"><g id="XMLID_234_"><g id="XMLID_235_"><g id="XMLID_236_"><g id="XMLID_237_"><circle id="XMLID_238_" cx="256" cy="256" fill="#ff90c2" r="256"/></g></g></g></g></g></g></g></g></g></g></g></g></g></g><path d="m512 256c0-22.027-2.784-43.404-8.016-63.8l-66.93-66.93-339.446 294.122 80.538 80.538c24.552 7.83 50.706 12.07 77.854 12.07 141.385 0 256-114.615 256-256z" fill="#ff73af"/><g><g><path d="m143.239 280.208-23.414 71.419-9.786 55.334 55.334-9.785 71.419-23.415-32.292-61.261z" fill="#fff"/><path d="m236.788 373.762-71.411 23.413-55.338 9.786 94.462-94.462z" fill="#ededed"/><path d="m193.613 158.595h132.304v197.281h-132.304z" fill="#ffe670" transform="matrix(.707 .707 -.707 .707 257.976 -108.339)"/><g><path d="m184.509 247.551h197.28v66.15h-197.28z" fill="#ffd400" transform="matrix(.707 -.707 .707 .707 -115.5 282.41)"/></g></g><path d="m165.373 397.176-45.548-45.549-22.217 67.765z" fill="#4a5be5"/><path d="m165.377 397.175-67.769 22.217 44.993-44.993z" fill="#283ee1"/><path d="m398.434 212.119-93.553-93.553 35.214-35.214c15.199-15.199 39.842-15.199 55.041 0l38.512 38.512c15.199 15.199 15.199 39.842 0 55.041z" fill="#00f8fe"/><g><path d="m433.647 176.904-35.214 35.214-46.775-46.775 62.734-62.734 19.254 19.255c15.203 15.201 15.203 39.837.001 55.04z" fill="#00d9e0"/></g><path d="m274.655 154.013h132.304v44.36h-132.304z" fill="#fff" transform="matrix(.707 .707 -.707 .707 224.407 -189.382)"/><path d="m342.018 166.502h44.36v66.15h-44.36z" fill="#ededed" transform="matrix(.707 -.707 .707 .707 -34.451 315.982)"/></g></g></svg>
		              	</a>
			            <a id="${index+1}" onclick="deleteList(this.id)">
			              	<svg height="15pt" style="cursor:pointer;" viewBox="-64 0 512 512" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 80h-32v-48h-64v48h-32v-80h128zm0 0" fill="#62808c"/><path d="m304 512h-224c-26.507812 0-48-21.492188-48-48v-336h320v336c0 26.507812-21.492188 48-48 48zm0 0" fill="#e76e54"/><path d="m384 160h-384v-64c0-17.671875 14.328125-32 32-32h320c17.671875 0 32 14.328125 32 32zm0 0" fill="#77959e"/><path d="m260 260c-6.246094-6.246094-16.375-6.246094-22.625 0l-41.375 41.375-41.375-41.375c-6.25-6.246094-16.378906-6.246094-22.625 0s-6.246094 16.375 0 22.625l41.375 41.375-41.375 41.375c-6.246094 6.25-6.246094 16.378906 0 22.625s16.375 6.246094 22.625 0l41.375-41.375 41.375 41.375c6.25 6.246094 16.378906 6.246094 22.625 0s6.246094-16.375 0-22.625l-41.375-41.375 41.375-41.375c6.246094-6.25 6.246094-16.378906 0-22.625zm0 0" fill="#fff"/></svg>
			            </a>
		              </td>
		            </tr>`;
		});
		let tableBody = document.getElementById('tableBody');
		if(libraryObj.length != 0) {
         	tableBody.innerHTML = html; 
        }
         else {
            tableBody.innerHTML = `
            	<tr style="background: transparent;">
            		<td colspan="4" align="center"style="font-weight: 600;font-size: 16px;">
            			No Library List found, Please add a First using above Form.
            		</td>
            	</tr>
            `;
        }
	}


    // Use this method to add directly on table whitout using local-storage
	// add(book) {
	// 	console.log("adding to UI");
	// 	let tableBody = document.getElementById('tableBody');
	// 	let uiString = `<tr>
	// 		              <td>${book.name}</td>
	// 		              <td>${book.author}</td>
	// 		              <td>${book.type}</td>
	// 		            </tr>`;
	// 	tableBody.innerHTML += uiString; 
	// }

	// Clear the form after to save the the book in local-storage
	clear() {
		let libraryForm = document.getElementById('libraryForm');
		libraryForm.reset();
	}

	// Check the form entry is correct or not before to  save in local-storage
	validate(book){
		if(book.name.length<2 || book.author.length<2) {
			return false;
		} else {
			return true;
		}
	}

	// Show status of Book either success or failure
	showStatus(type, displayMessage) {
		let message = document.getElementById('message');
		let boldText;
		if(type === 'success') {
			boldText = "Success";
		} else {
			boldText = "Error";
		}
		message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
							  <strong>${boldText}: </strong> ${displayMessage}
							  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
							    <span aria-hidden="true">&times;</span>
							  </button>
							</div>
						   `;
		setTimeout(function() {
			message.innerHTML = '';
		}, 5000);
	}

	// Save a book to local-storage
	saveStorage(book) {
		let libraryObj;
		let libList = localStorage.getItem('library-list');
		if(libList == null) {
			libraryObj = [];
		} else {
			libraryObj = JSON.parse(libList);
		}
		 
		let hiddenId = document.getElementById('hiddenIdValue');
		let formIndexValue = hiddenId.value;
        if(formIndexValue) {
            libraryObj[formIndexValue]['name'] = book.name;
            libraryObj[formIndexValue]['author'] = book.author;
            libraryObj[formIndexValue]['type'] = book.type;
            localStorage.setItem("library-list", JSON.stringify(libraryObj));
            hiddenId.value = '';
        } else {
            let libraryListObj = {
				name: book.name,
				author: book.author,
				type: book.type
			};
            libraryObj.push(libraryListObj);		
			localStorage.setItem('library-list', JSON.stringify(libraryObj));
        }
        window.scrollTo(0,document.body.scrollHeight);
	}

	// Check if book already saved with same name
	checkPreviousStock(book) {
			let libraryObj;
			let libList = localStorage.getItem('library-list');

			if(libList == null) {
				libraryObj = [];
			} else {
				libraryObj = JSON.parse(libList);
			}
			let newLibraryObject = Object.keys(libraryObj);
			let flag=0;
			let i;
			for(i=0;i<newLibraryObject.length;i++) {
				if(libraryObj[i]['name'].toLowerCase() === book.name.toLowerCase()) {
					flag = 1;
					break;
				}
			}
			if(flag == 1){
				return false;
			} else {
				return true;
			}
	}
}

class Delete {
	deleteList(index) {
		let libraryObj;
		if(index != null) {
			let libList = localStorage.getItem('library-list');
			if(libList == null) {
				libraryObj = [];
			} else {
				libraryObj = JSON.parse(libList);
			}
		    libraryObj.splice(index, 1);
		    localStorage.setItem("library-list", JSON.stringify(libraryObj));

		    return true;
		} else {
			return false;
		}
	}
}

class Edit {
	editList(index) {
		window.scrollTo(0,0);
		
		let libraryObj;
		// Get all controls of form value using id or classname.
		let name = document.getElementById('bookName');
		let author = document.getElementById('author');
		let hiddenId = document.getElementById('hiddenIdValue');
		let addBtn = document.getElementById('addBtn');
		let type;
		let fiction = document.getElementById('fiction');
		let programming = document.getElementById('programming');
		let cooking = document.getElementById('cooking');

		// retrieve list from local-storage first.
		let libList = localStorage.getItem('library-list');
		if(libList == null) {
			libraryObj = [];
		} else {
			libraryObj = JSON.parse(libList);
		}

		name.value = libraryObj[index].name;
    	author.value = libraryObj[index].author;
    	type = libraryObj[index].type;

    	// edit type of book through this.
		if(type == 'fiction') {
			fiction.checked = true;
		} else if (type == 'programming') {
			programming.checked = true;
		} else if(type == 'cooking') {
			cooking.checked = true;
		}

		// update hiidden value wth the help of index value.
		hiddenId.value = index;
	    if(hiddenId.value) {
	        addBtn.innerHTML = 'Update book';
	    } else  {
	        addBtn.innerHTML = 'Add book';
	    }
	}
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
	console.log("You have submitted a library form");
	let addBtn = document.getElementById('addBtn');

	let name = document.getElementById('bookName').value;
	let author = document.getElementById('author').value;
	let type;

	let fiction = document.getElementById('fiction');
	let programming = document.getElementById('programming');
	let cooking = document.getElementById('cooking');


	if(fiction.checked) {
		type = fiction.value;
	} else if (programming.checked) {
		type = programming.value;
	} else if(cooking.checked) {
		type = cooking.value;
	}

	let book = new Book(name, author, type);

	let display = new Display();
	e.preventDefault();

	if(display.validate(book)) {
		if(display.checkPreviousStock(book) == true) {
			display.saveStorage(book);
			// display.add(book);
			display.addAndDisplay();
			display.clear();
		    addBtn.innerHTML = 'Add book';
			display.showStatus('success', "your book has been successfully added. ");
		} else {
			display.showStatus('danger', 'sorry this book already exist in the book selves. ');
		}
	} else {
		// Show error to user
		display.showStatus('danger', 'sorry you cannot add the empty/Wrong entry in the book list. ');
	}
}



// Display Books on Page load
let display = new Display();
display.addAndDisplay();


// search the respective Library book.
let search = document.getElementById('searchTxt');
search.addEventListener('input', () => {

	let inputVal = search.value.toLowerCase();
	let tableBody = document.getElementById('tableBody');
	let tr = tableBody.getElementsByTagName('tr');
	let th = table.getElementsByTagName("th");

	for(let i=0;i<tr.length;i++){
	    for(var j=0; j<th.length-1; j++){
	        td = tr[i].getElementsByTagName("td")[j];      
	        if (td) {
	            if (td.innerHTML.toLowerCase().indexOf(inputVal) > -1) {
	                tr[i].style.display = "";
	                break;
	            } else {
					tr[i].style.display = "none";
	            }
	        }
		}
	}
});

// delete the respective book list
deleteList = (index) => {
	let listIndex = new Delete();
	let display = new Display();
	if(listIndex.deleteList(index-1)) {
		display.showStatus('success', `The book of id: ${index} has been removed successfully.`);
		display.addAndDisplay();

	} else {
		// Show error to user
		display.showStatus('danger', 'sorry the book you are trying to delete is not exist.');
	}
};

// edit the respective book list
editList = (index) => {
	let editrow = new Edit();
	editrow.editList(index-1);
}


// Reset libraryForm when not to take update values
let resetFormBtn = document.getElementById('resetBtn');
resetFormBtn.addEventListener('click', resetForm);

function resetForm() {
	let display = new Display();
	display.clear();
}