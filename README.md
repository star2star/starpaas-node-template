# StarPaaS Node Template

## Introduction

The **starpaas-node-template** serves as a template for creating nodes for StarPaaS

## Usage

Clone this repository

```bash
git clone https://github.com/star2star/starpaas-node-template.git
git remote remove origin
```

Install dependencies

```bash
npm install 
```

Using your favorite editor modify the node code which can be found at ./src/index.js.  

You may need to modify the storybook test file which can be found at ./src/test/stories/index.js.  NOTE: changes within this file might need to be applied to template so future nodes may blessed by your changes; please coordinate with team lead. 

Validating via StoryBook

```bash
npm run storybook
```

## History

#### 12/12/2018 - v1.0.1

* added publish and unpublish methods 

#### 11/28/2018 - v1.0.0

#### 12/26/2018 - v1.0.1
TA - added dependency s2s-node-utilities

#### 02/04/2019 - v1.1.0
* added needsToken function 



* initial checkin 