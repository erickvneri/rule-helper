# Rule Helper

## Overview

The **_Rule Helper_** is an application intended to improve the understanding of the
[Rules API](https://smartthings.developer.samsung.com/docs/api-ref/st-api.html#tag/rules).
Also, it pretends to enhance the experience of developers and hobbyists while building
Home Automation solutions.

#### Some of the perks about building Rules are:

- Rules are based on the JSON format which is easy to understand.
- Control flow statements and context managers are very intuitive.
- Complexity of your Rule will rely on your creativity.
- The flexibility to build different solutions to the same problem, etc.

#### About the _Rule Helper_:

The **_Rule Helper_** is devided in **{{ TBD }}** components.

- The **_Rule Examples_** component offers a series of Rules that cover
multiple use cases with the current _Rules API_ features.
- The **_Basic Templates_** component provides an introduction to different
conditionals to create Rules.
- The **_Advanced Templates_** component combines elements presented by _Basic Templates_
and illustrates the flexibility of nested conditionals and concatenated actions.

_**Note**:  For futher implementation of templates, please follow the
[Rules API](https://smartthings.developer.samsung.com/docs/api-ref/st-api.html#operation/createRule) reference._

---

## Deployment

#### Software requirements.

To deploy the _Rule Helper_, make sure you have the latest version of [NodeJS](https://nodejs.org)
installed at your computer.

Additionally, this deployment tutorial uses [Yarn](https://yarnpkg.com) as package manager, however,
you're not limited to it. You can still use [NPM](https://www.npmjs.com/) if you prefer.

#### Setup

Run the following command to install the app dependencies:

    yarn install

#### Deploy

To run the **_Rule Helper_** application execute the following command:

      yarn start

After a few seconds, the application will be automatically deployed at your browser.

---

For more information about the **_Rules API_**, please visit our [Rules Documentation](https://smartthings.developer.samsung.com/docs/rules/overview.html) or share your questions at our [Community forums](https://community.smartthings.com/c/developer-programs).
