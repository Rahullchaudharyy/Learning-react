1.Created a folder with the name of 'Context' , We can name this diffrent as well .
Now in this folder created a UserContext.js in this file we write a code this

        ```javascript
        **#import { createContext } from "react";

        const UserContext = createContext();

        export default UserContext**
        ```


        we have created a context here , Now the "Context always provides a
        Provider , Every context is a provider , here the UserContext is a provider (Also consider the context as a Global variable .)

        when we use this as a wrapper then its become the provider ,
        and what so so ever the components are there inside this wrapper
        those all components have the access of the context or provider or you can say
        as a global variable. we wrap like this for just sake of example :

      ```javascript
      <UserContext>
      <Header/>
      <Body/>
      <Footer/>
      </UserContext>

         ```

        the all componts like Header , body , and footer has the access of the this global variable 
        

        ``` "
