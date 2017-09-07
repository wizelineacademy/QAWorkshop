# Academy QA Workshop
Repository created for the fundamentals of Test Automation

# Goals

* Objects Locators best practices
* Define Page Models
* Usage Page Object Pattern 
* Autoamted test execution


# Getting Started

### Prerequisites

You need to have the following tools installed on your computer.

Node.js v6.10.0 or higher.
To install Node.js, download it from the Node.js webpage.


### Instructions.
Clone the repository in your local machine and create a new branch
```
git clone https://github.com/wizelineacademy/QAWorkshop.git
cd qaworkshop
git checkout -b <branch-name>
```

### Installation
Install package dependencies by running.

```npm install```

### Test Run

Once you have the environmet set up, you will need to start Webdriver-Manager then Run the protractor tests.
Open the terminal and follow the instructions
```
cd path-directory/academy-qa-workshop
webdriver-manager update && webdriver-manager start
protractor confs/conf.js
```
