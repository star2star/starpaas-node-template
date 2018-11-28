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

You will need to modify the storybook test file which can be found at ./src/test/stories/index.js.  NOTE: changes within this file might need to be applied to template so future nodes may blessed by your changes; please coordinate with team lead. 

Validating via StoryBook

```bash
npm run storybook
```

## History

#### 11/28/2018 - v1.0.0

* initial checkin 