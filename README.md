# mobx-rest working example

I hacked this little project to show how to
use `mobx-rest`.

You can access the [demo here](https://demo-wiimsnkpdy.now.sh/).

To build it I did the following:

```
npm install -g create-react-app
create-react-app demo
cd demo
yarn start
```

With this you can have an up and running react app :)
Next was to install the dependencies:

```
yarn add mobx
yarn add mobx-react
yarn add mobx-rest
yarn add mobx-rest-fetch-adapter
```

After this I created the 3 stores:

  - users
  - todos
  - comments

And you are good to go!

## Comments

### API

I'm using [JSON Placeholder](https://jsonplaceholder.typicode.com/) API to
implement this example. The API is not persistent, so only one comment can be
fakely created (always returns id 501).

### Decorators

I highly recommend for your project to use decorators since
the API is much more cleaner with them but as I showed in
this example, it's not needed to get started.
