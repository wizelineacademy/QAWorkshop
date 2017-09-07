 // Casual is a fake generator data library
 // If you need more information about 'Casual' you can refer to the follow
 // url https://github.com/boo1ean/casual
 var casual = require('casual')

 var Data = function () {
     // Define custom generator
   casual.define('title', function () {
     return {
       mr: 1,
       mrs: 2
     }
   })

     // Email fake value
   this.email = casual.email

     // Create personal info data to be used on the test.
   this.personalInfo = {
     title: casual.title,
     firstName: casual.first_name,
     lastName: casual.last_name,
     password: casual.password,
     day: casual.day_of_month,
     month: casual.month_number,
     year: casual.year,
     newsLetter: casual.coin_flip,
     specialOffers: casual.coin_flip
   }
 }
 module.exports = new Data()
