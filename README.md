

## Stack Shop Bounty (Capstone Project) with Affinidi

![home](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/3fcd771e-38fe-4cfe-8bd3-85ba73473d5e)

[Affinidi Capstone Project](https://affinidi-capstone-project.vercel.app/)

For this bounty, I have included additional information that can be retrieved from Affinidi about the user, such as their middle name, nickname, and profile picture.

![0-2](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/e52990af-e2c3-4631-9c5a-3832b2d850bd)
![0-3](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/a322d299-db30-4b0d-8d7b-d3dbd4e75426)
![0-1](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/83e3a169-22dc-4005-9544-9ad3deeb327c)


I have also added several features that utilize the user information from Affinidi, and have made some changes to the app's appearance. Here is a list of the updates:

 **1. Navbar**
 
  First, I modified the navbar display by adding the user's profile picture and changing the greeting from using the givenName or first name to instead use the nickname retrieved from Affinidi.
  
  Here is the updated display and the code I used:

![1-1](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/4818cdb9-5b0b-4564-ad32-be0641b4b775)
![1-2](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/9646c761-ed7c-4b1b-a335-4efcb0186931)
![1-3](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/47395386-51c4-4622-b700-51c831ec9cc9)


 **2.  Product Display**
 
 ![2-1](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/45002cc0-40bc-4014-916b-d70d7dac698c)

 Here I also added some features including:
 - Discount for customers from specific regions
	 I implemented a 15% discount for customers from Indonesia, Singapore, and Malaysia.

    ![2-2](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/de0c8c81-50fa-4144-9641-7783592c9a4a)
    ![2-3](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/b43fd5f3-e96d-48e2-ab77-f38d5da2097b)

	 
 - Currency matching the user's country
	 I changed the product prices from displaying in US dollars ($) to instead show the currency that corresponds to the user's country. I also converted the prices from USD to the user's local currency using the latest currency exchange rates.
	 ![2-4](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/d431508b-15b6-4ad2-a90a-a5e9e9f24879)
   ![2-5](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/13411cba-3f29-4367-8369-4b47b50224d3)
   ![2-6](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/36d31dbd-416e-4a58-8989-7d57a2a1c053)


**3. Modal**

For this update, I also changed the appearance of all modals by utilizing the Modal component from the Material-UI (MUI) library.

Using the Modal component from MUI allows for a consistent and modern modal design across the application. MUI provides pre-built, customizable React components that adhere to Google's Material Design guidelines. Replacing custom-built modals with MUI's Modal component leads to a more polished and cohesive user interface while reducing development effort required to style modals from scratch.

![3-1](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/2cf70cfc-5993-4b57-b201-28d087a66593)
![3-3](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/5e7835a8-2171-4c59-ad00-bc4f444296d8)
![3-2](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/65347063-81c2-4bbb-95bc-1dade9291673)
![3-4](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/76863b16-d4ba-43a3-bc0e-3aefc9d46b1f)


**4. Cart**

On the Cart page, I centered the table and added a delete item button to the left side of each row.

Centering the cart table helps improve the visual layout and balance of the page. Adding a dedicated delete button for each item provides a clear and intuitive way for users to remove items from their cart. Placing the delete button on the left side follows common patterns and makes it easily accessible.

![4-1](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/0cb82756-4807-42d8-bd31-1a83bbeb4d64)
![4-2](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/b85384bc-6f2d-46a2-a4e8-6daaf6b93877)
![4-3](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/4dfac93c-6b92-4ac7-9b82-1482d7d42137)


**5. Checkout**

On the checkout page, I centered the user information table and also included the user's middle name retrieved from Affinidi.

Centering the user information table creates a balanced and visually appealing layout for the checkout page. Adding the middle name field enhances the personalization of the checkout experience by displaying more complete name information about the user. Utilizing data from Affinidi allows you to pre-populate fields like the middle name automatically, saving users from having to manually enter this information.

Displaying the user's full name prominently on the checkout page helps build trust and provides a more personalized checkout flow. Overall, these changes contribute to a polished and user-friendly experience during the crucial checkout process.

![5-1](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/f708aad7-9943-4167-b4f4-691ed6901aad)
![5-2](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/95c8f4b7-2f21-46b5-a1cb-5c3b822680e3)
![5-3](https://github.com/ikhsandadan/affinidi-capstone-project/assets/116878888/72b4a106-efcf-42c2-a0f9-2fb4c707b18f)

