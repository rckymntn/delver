# Untitled 

A roguelike built with TypeScript and rot.js

## To do

- [x] Basic actors, props, and tiles 
- [x] Map generation 
- [x] Display 
- [x] Drawing text 
- [x] Player movement 
- [ ] Player field of view 
- [ ] Simple combat
- [ ] Variety of NPC behaviors
- [ ] Item and equipment usage 
- [ ] Traversal between floors 

## Limitations

- Designed as a static site for GitHub Pages, so no saving player progress 

## Developer commands 

1. `npm run tests`: Runs the jest tests with coverage metrics located in `tests/`
2. `npm run build`: One time build the project to `dist/main.js`.
3. `npm run watch`: Build the project to `dist/main.js` on edits.
4. `npm run live`: Open the project on localhost.
5. `npm run watchlive`: Combination of `watch` and `live`. 
6. `npm run minify`: Minify `dist/main.js` to `dist/main.min.js`.