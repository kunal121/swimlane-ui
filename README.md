# React Test

This repository contains code for a Swimlane UI.

## Installation

To install the necessary dependencies, run the following command:

```
npm install
```

## Usage

To start the application, run the following command:

```
npm start
```

## Architecture

```
<BoardProvider>
|
<Search /> [Top level search to filter blocks]
<BoardConfiguration/>
<Board />
 |- <BoardLane />
|- <Block /> [drag, drop functionality is implemented here]
|- <PreviewCard /> [History of blocks are shown here]
Check constants for config and mock data used to build the UI

Functionality implemented:

1. Search for blocks
2. Configure Board
3. Drag and drop blocks
4. Preview block details (Here only History of blocks are shown on the UI)

Note: CRUD of blocks are not implemented yet currently controlled by mock data from constants and field update functionality is provided in view section
```

## Demo Link

https://drive.google.com/file/d/1m7D2HxnqfxQyBT5HIdyOq7m6ceU63GCw/view

## Design Link
https://drive.google.com/file/d/1lOgZC1eXJygQoplclJD81lQuakKEXLR6/view?usp=sharing
