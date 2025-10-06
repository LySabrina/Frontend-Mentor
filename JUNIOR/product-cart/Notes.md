React Context

I have 3 components that importantly interact with each other. Card.jsx has Button.jsx.

Button.jsx determines how many amount of that item the user wants.

So in turn, the amount specified should be updated in the Cart component.

Additionally, the Cart has CartItems.jsx which users can click on "X" button to remove it. Hence, it will update the amount on the Button.jsx and Card.jsx.

So we have essentially, about 2-4 Components interacting. Really, its the CartItems.jsx and Button.jsx that are internally changing.

Additionally, these components are not siblings and nested elsewhere. To pass them down manually is a pain. Hence, lets use a context

### useReducer

useReducer is very similar to useState

They both involve a current value and a function that triggers state update.

When to use one or the either?

- useReducer for managing complex logic
- useState for simple variale updating

useReducer(reducerFunction, initialState) : [state, dispatch]

- this returns an array with state and dispatch values

dispatch({type:<YOUR ACTION>}) = function that updates the state value and triggers re-rendering

- similar to the updater function in useState
- tells what action that reducer should do

reducer(state,action) = function that has all the logic of how the state gets updated

- action = an object with type property that determines what to do

### CSS background-img vs img srcset

background-image will not help screen-reader and ignores it. img will have an alt tag that allows users to hear what it is.

Use img if you allow the user to print your page. background-image will not be printed

background-image = decorative
img = content has purpose

# <img srcset, sizes>

srcset = contains values separated by commas

- defines set of images the browser can choose and what size each of those images are.

(example) srcset = "elva-fairy-480w.jpg", 480w

- filename = "elva-fairy-480w.jpg"
- width = image's width in pixel

sizes = defines a set of media condition and indicates which image size should be chosen when condition becomes true

Resources:
[Getting Button to be on the middle](https://medium.com/front-end-weekly/absolute-centering-in-css-ea3a9d0ad72e)
