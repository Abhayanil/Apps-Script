//Creating a custom menu
//Custom menus are UI elements that should appear when the document is opened hence the code for the same has to be given inside onOpen function.

function onOpen() {
 const ui = SpreadsheetApp.getUi();
 const menu = ui.createMenu('GTD Menu');
 menu.addItem('Create slide deck', 'sheetToslides');
 menu.addToUi();
}

//The above code will make a menu named GTD menu having item Create slide deck, which when pressed will execute sheetToslides function in the script.

/*For complex menu (script access more than one sheet) onOpen() function will alone won’t be enough to create a menu when 
the sheet is opened. 
For that add change the name of the function from onOpen to another variable name then set onOpen trigger in Apps script with the new function name*?
