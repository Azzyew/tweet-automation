# Tweet Automation Script

# :pushpin: Table of Contents

* [Introduction](#paperclip-introduction)
* [Technologies](#computer-technologies)
* [How to run](#rocket-how-to-run)

# :paperclip: Introduction

I made this script to practice Puppeteer and also to find a way to tweet automatically since I can't tweet that much during the day because of work, so with this I can still take part in saving Warrior Nun :heart:

# :computer: Technologies

* [Node.js](https://nodejs.org/en/)
* [Puppeteer](https://puppeteer.github.io/puppeteer/)

# :rocket: How to run

### Prerequisites

You must have both Node and Yarn installed to run this script

### Walkthrough
```bash
# Clone the repository
$ git clone git@github.com:Azzyew/tweet-automation.git

# Go to project folder
$ cd tweet-automation

# Install dependencies
$ yarn
```
Set an .env file in the project directory with USERNAME=your_username_here and PASSWORD=your_password_here.
Run the project with:

```bash
$ yarn start

# Or

$ node index.js
```

You can also use whatever text you want, just make sure to change the parameter in line 20 of the index.js to make sure you're reading the right .txt!

Made with :heart: by Laisa Costa