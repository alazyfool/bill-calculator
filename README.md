# DmartBillFrontend


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

