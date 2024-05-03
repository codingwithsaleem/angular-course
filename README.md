# angular course 


## angular commands

ng serve (for runing application)

ng new app-name (this will create new angular app with latest version)

npx -p @angular/cli@11.1.2 ng new Angular11App (this is for specific version)



# what is interpolation ?

interpolation is used for to display dynamic data on html page. 
{{}}  this duble brackets called interpolation.

a way to transfer the data from a TypeScript code to an HTML template.


# angular cli important commands

1: ng help (this command will show all important commands and their usecase)

2: ng generate component componenetName (this will create new component inside app folder)
this is shortform(ng g c componentName)

3: ng g class <class-name> (It is used to create a new class in Angular.)

4: ng g directive <directive-name>

same for aothers...................... explore from this link [angular cli](https://angular.io/cli)


# what are module in angular

a place where you can group the components, directives, pipes, and services, which are related to the application

# why we use module instead of creating all components at single module 

Angular supports lazy loading, a technique that loads only the necessary parts of your application when they are needed. Modules play a crucial role in enabling this feature, resulting in faster initial load times and improved user experiences.


# What is property binding in angular ?

Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button features, set paths programmatically, and share values between components.

# the difference between property binding and introplation in angular ?

Interpolation is ideal for displaying dynamic data directly in templates, using a simple {{ }} syntax. On the other hand, property binding is more suited for binding component properties to HTML element properties, allowing for dynamic updates based on changes in the component.

# *ngFor

ngFor is a specific type of directive used to dynamically repeat data in a template. In plain JavaScript you would use a for loop - ngFor provides similar functionality for Angular templates. You can utilize ngFor to iterate over arrays and even asynchronous values.




 QT@SaleemRaza MINGW64 /d/saleem-work/angular-course (master)
$ node -v
v16.20.2

QT@SaleemRaza MINGW64 /d/saleem-work/angular-course (master)
$ npm -v
7.0.7

QT@SaleemRaza MINGW64 /d/saleem-work/angular-course (master)
$ ng --version


Angular CLI: 11.2.19
Node: 16.20.2
OS: win32 x64
