**REACT MARKDOWN PREVIEWER**

This is a simple project that I made difficult.

Up until a few projects ago, I was using codepen as per the suggestion of freecodecamp. I came to a point when I wanted to start deploying to the web independently, and as close to the full stack as possible.

I chose heroku to do so. I taught myself the modicum of node, and express to do so. I am continuing to deploy the things I build with heroku in order to better understand the inner workings of the applications I'm building.

Turns out there is a ton going on under the hood of a React App. I began by building it locally unaware of the details of transpiling and bundling. So here I am building it over again using babel and webpack.

I've heard hiring companies don't like looking at FCC projects as part of one's portfolio. I hope this is a bit more interesting to look at.

**Progress Log**

### January 7, 2022
  Working on getting the server up and running before migrating my prior react code over from my past attempt at building this from the ground up. I was a bit confused when I did a tutorial on webpack, and then tried to implement what I learned in this project. Webpack can run a local server "dev", but I'm after deploying on heroku so I'm going to be writing a server that uses express. I'm also going to take a minute and write down the seemingly arduous starting procedure for building a local react app.


### January 11, 2022
  I started the day off realizing webpack had an error. It took me a long time to track down as I"m new to webpack. My eventual solution came when I started reading through github's loader docs. I had no idea I had to install each of these laoders using npm. So once I finally installed the necessary loaders, it is working just fine. Now onto styling things out. I am not the greatest with CSS/SASS, so it's going to be good experience. Looking forward to it.


### January 13, 2022
  Almost there. The lesson learned today is to deploy to heroku often. I hadn't initiated the app on heroku, and now I've got an almost complete (all tests passing) application that I have to spend hours troubleshooting. The issue now is the build is timing out. I've made a list of potential fixes, and will hopefully have this thing in the bag by lunch tomorrow.

### January 18, 2022
  I've hit a pretty hard wall trying to deploy to heroku. I've chased down a bunch of issues that it could be, and I continue to do so. I'll be starting a ticket with heroku today. Currently the build is successful until it hits webpack. Then webpack "compiles successfully" over and over until the build finally fails.

### January 19, 2022
  Finally successfully deployed the site on heroku. The final solution was to tweak my heroku config settings. It appears I was installing dependencies and then immediately pruning them. Success! Wow. That took me a few days to figure out. Along the way I've learned how to check for memory leaks, the intricacies of deploying with heroku, a ton about package.json, and installing dependencies, and a whole lot more. I'll take it!