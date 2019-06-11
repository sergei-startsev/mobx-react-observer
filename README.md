# mobx-react-observer
mobx-react issue repro steps

## mobx-react 5
 - `yarn install`
 - `yarn run test`

## mobx-react 6
 - `yarn upgrade mobx-react@^6`
 - `yarn run test`

`Foo > shallow` test diff:

 ```diff
- <div>
-   Test
- </div>
+ <Observer>
+   <Component />
+ </Observer>
 ```