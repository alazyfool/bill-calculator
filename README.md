# DmartBillFrontend


## Modifications/Enhancements
* Integration with Google Pay API - 'Request' button to request all the contributors at once via API
* Add Groups - groups like 'A-601', 'A-301' in contributors dropdown, when selected would select all the members of the group as contributors
* Contributors multiselect should have a search
* add spinner on calculation
* add validations, price cannot be 0
* Implment login
* only the contributors in the bill can access the bill via url, they will get a notification when a new bill is added with them as contributor even for a single item
* optimize calculation - the current implementation is a lame one
* use AWS lambda to process stuffs and store in backend (probably Dynamo DB)
* edit bill functionality - would require login functionality to be implemented first
* generate monthly report for expenses for each user
