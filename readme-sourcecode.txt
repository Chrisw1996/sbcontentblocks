ContentBuilder is written in javascript as ES6 module. Here are the steps to customize the source code:

1. Unzip the package. You will see the ContentBuilder source code is located in folder src.

2. You need to install few dependencies for the project.

First, download and install NPM from https://nodejs.org/en/download/

Then unzip ContentBuilder package.

Open terminal/console/command prompt and go to the ContentBuilder folder: 

    > cd ContentBuilder

Then install the dependencies: 

    > npm install

3. Then run this to compile and bundle the project code to get the minified js file (contentbuilder/contentbuilder.min.js):

    > npm run build 

   If you see "waiting for changes...", your project is now ready and the minified js file (contentbuilder.min.js) is successfully generated.

4. You can make modification to the ContentBuilder by editing the source files in src folder. 
   When you save any change, contentbuilder.min.js will be automatically updated.


TIPS:

- We use Visual Studio Code to edit the source. In Visual Studio Code, you can install an extension called: "Live Server" (by Ritwick Dey).

- To test, add/open ContentBuilder folder in Visual Studio Code. Right click example1.html file, and select "Open with Live Server".
  The example1.html file will be opened by your active browser: http://127.0.0.1:5500/example1.html

- You can also run PHP from the Visual Studio Code by installing an extension called: "PHP Server" (by brapifra).
  With this extension installed you can try example2.php. 
  Select example2.php from Visual Studio Code. After the file opened, right click on any line to open menu, then select "PHP Server: Serve Project"

- By running this command (see steps above):

    > npm run build 

  Any change you made on the ContentBuilder source files (in folder /src ), will automatically refresh the browser (when you're using Live Server)
  so you will see the result immediately.
  The new contentbuilder.min.js file will also automatically updated (see folder contentbuilder). Use this file on your production.


