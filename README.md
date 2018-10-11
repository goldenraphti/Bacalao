Bacalao - Merchandise Inventory Management Tool
===============================

## Table of Contents

* [Demo](#demo)
* [Instructions for the users](#instructions-for-the-users)
* [Loading the app](#loading-the-app)
* [Technical Instructions for Developers](#technical-instructions-for-developers)
* [Credits](#credits)

## Demo

The web-app is still a work-in-progree. It is not ready for production.

Check the [online version](https://bacalao.netlify.com/).

## Instructions for the users

Oslo Trail Web-App

The goal of this web-app is to offer to the festivals a solution for the volunteers to update the inventory with the festival-merchandising they've sold at the venues/conferences.   
It aims at being a all-in-one place solution. The volunteers can report their sales, the staff can check the inventory and each logs (corresponding to each sale-report). Those are features present in the development version, and to be released really soon for production.  
Select 'Edit', decide which type of merchandising you've sold (e.g. "shirt"), then select the items you've sold. Then you specify the quanty for each size. And finally you simply enter the name, the concert and eventually some comments.    
The staff can check each log, the date and time, concert, and all those infos reported by the volunteer. 

The web-app is a Single Page App. It's a progressive offline first web-app which means once you've been loading the content by navigating through the web-app all the datas loaded in the cache will still be available if you get offline. It actually ONLY load content if it is new content never previously loaded before.

## Loading the app

This app can be loaded by starting the server
+ Open a terminal in the root folder
+ type 'npm install' and then 'npm start'
+ go to 'localhost:3000' in your browser

You will need an internet connection, at least at first.

## Technical Instructions for Developers

The master branch is production ready, but the features are still kept fairly simple, and more content is added continuously..
Next features to be added include:
- [x] Edit function, reporting the sales
- [x] Inventory, where you can check the quantities and sizes still available for each product, updated in real time
- [x] Logs, to check each report made and all their details
- [ ] Authentification (mostly to separate features reserved for staff)
- [ ] Staff administration of supplies, to, for example, add new supplies to the inventory
- [ ] Add new products to the inventory catalog, giving image, name, type, id, ...





## Credits

This web-app was entirely coded by Raphaël Ferrand.
