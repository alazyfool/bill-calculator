# BillFrontend

## Features

* Add Users/Contributors
* Add Groups like 'A-601', 'A-301' 
* Add Events like 'Dmart-17thsep', 'TripToFort'
* Each User can create a bill - he is owner of the bill
* Other contributor included in the bill can create their own expense or send an update request to other person's entry
* Update request can be to opt out of the item, will be send to owner to approve
* Login of Contributors and Admin
* Each Event will have a Bill of its own, bill can be groups specific or can include multiple groups and contributors
* Prices in the bill will be updated dynamically
* Maintain UPI Address or QR Code per user for payment request
* Each bill will have a unique url of its own
* Option to add discounts/cashbacks seperately and divide among contributors based on their expense percentage wise
* Contributor's will get a notification if they are included in any Event/bill
* Bar and Charts for each bill to show contribution percentage, stats of each member
* Generate Monthly report for expenses for each user
* To Pay or Receive from other user is calculated according to the bill creator, For eg: X is the bill creator, he will be shown as To pay 100 to Y and receive 200 from Z.

<!--
## Modifications/Enhancements
* Maintain UPI Address/es or QR-Codes per user for payment request
* Add Groups - groups like 'A-601', 'A-301' in contributors dropdown, when selected would select all the members of the group as contributors
* Contributors multiselect should have a search
* Calculation of discounts based on individual expense
* add spinner on calculation
* add validations - price cannot be 0,
* Implment login via number or email
* only the contributors in the bill can access the bill via url, they will get a notification when a new bill is added with them as contributor even for a single item
* optimize calculation - the current implementation is a lame one
* use AWS lambda to process stuffs and store in backend (probably Dynamo DB)
* edit bill functionality - would require login functionality to be implemented first
OR
* Option to opt out of an item, would send a notification to the bill creator
* generate monthly report for expenses for each user

-->
