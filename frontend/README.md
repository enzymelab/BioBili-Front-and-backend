# MyFirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

    Introduciton to the course

    Install development tools

    Create Angular App
        Create project's folder
        Install @angular/cli
        Create App as frontend

    Add Header
        Generate Component
        Add Html
        Add CSS

    List Foods
        Create Food model
        Create data.ts
            Add sample foods
        Add images to assets
        Create Food service
        Create Home component
            Add ts
            Add html
            Add css

    Search
        Add method to Food service
        Add search route
        Show search result in Home component
        Generate search component
            Add to home component
            Add ts
            Add html
            Add css

    Tags Bar
        Create Tag model
        Add sample tags to data.ts
        Food service
            Add get all tags method
            Add get all foods by tag method
        Add tags route
        Show tag result in Home component
        Generate Tags component
            Add to home component
            Add ts
            Add html
            Add css

    Food Page
        Add method to food service
        Generate Food Page component
            Add Route
            Add ts
            Add html
            Add css

    Cart Page
        Create CartItem Model
        Create Cart Model
        Generate Cart service
        Add to Cart Button in Food Page
        Generate Cart page component
            Add Route
            Add ts
            Add html
            Add css

    Not Found!
        Generate Component
            Add ts
            Add html
            Add css
        Add To Pages
            Home Page
            Food Page
            Cart Page

    Connect To Backend
        Create backend folder
        npm init
        npm install typescript
        Create tsconfig.json
        Create .gitignore
        Copy data.ts to backend/src
        npm install express cors
        Create server.ts
            install @types
            Add Apis
        npm install nodemon ts-node --save-dev
        Add urs.ts to frontend
        Add HttpClient module
        Update food service

    Login Page

        Generate Component
            Add to routes
            Add ts
            Add html
                Import Reactive Forms Module
            Add Css

        Add Login Api
            Use json
            Add jsonwebtoken
            Test Using Postman

        Generate User Service
            Generate User model
            Add User Subject
            Add Login Method
                Add User Urls
                Generate IUserLogin interface
                Add ngx-toastr
                    Import Module
                    Import BrowserAnimationsModule
                    Add styles in angular.json
                Add to Header
            Add Local Storage methods
            Add Logout Method
                Add to Header

    Make Components For Login Page
        Input Container
        Input Validation
        Text Input
        Default Button

    Connect Login API To MongoDB Atlas
        Moving Apis into routers
        Create MongoDB Atlas
        Create .env file
        Install
            mongoose
            dotenv
            bcryptjs
            express-async-handler
        Connect to MongoDB Atlas
        Use MongoDB instead of data.ts in apis

    Register User
        Add Register api
        Add Register service method
        Add Register link
        Add Register Component

    Loading!
        Add Image
        Add Component
        Add Service
        Add Interceptor

    Checkout Page
        Create Order Model
        Create Checkout Page Component
            Add To Router
        Add User to User Service
        Add Cart to Cart Service
        Create Order Items List Component
        Adding Map To The Checkout Page
            Add Leaflet npm package
                Add @types/leaflet
                Add Css to angular.json
            Add AddressLatLng to Order Model
            Create Map component
                Add to checkout page
                Add TS
                    Change app-map selector to map
                Add Html
                Add CSS
            Add Auth Guard
        Save Order
            Add Order Model
            Add Order Status Enum
            Add Auth Middleware
            Add Order Router
                Add create API
            Add Order Urls to urls.ts
            Add Order Service
                Add create Method
            Add Auth Interceptor

    Payment Page
        Generate Component
        Add 'getOrderForCurrentUser' api
        Add Order Service method
        Connect Component to Service
        Make the map component readonly

    Adding Paypal
        Generate Component
            Add to payment page
        Get Paypal client Id
        Add Paypal JS to index.html
        Set up Paypal button
        Add Pay api to order router
        Get Paypal sandbox account

    Order Track Page
        Generate Component
            Add to routes
        Add API
            Add to urls.ts
        Add method to order.service
        Add HTML
        Add CSS

    Deploy On Heroku
        OutputPath in angular.json
        package.json
            frontend
            backend
            root
        BASE_URL in urls.ts
        Public folder config in server.ts
        Run commands
        Add built folder to .gitignore
        Commit and Push

    Updating Packages (Optional)
        Install npm-check-upates as a global package
        Run ncu -u in the frontend folder
        Downgrade typescript to version ~4.8.2
        Run npm install --force
        Run npm start
        Run ncu -u in the backend folder
        Run npm install
        Run npm start
