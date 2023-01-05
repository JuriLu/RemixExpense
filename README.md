# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a
 new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```


NOTES:

** If the code is right, and may ocurre an error unexplainable, make a npm run build

1. index (the word) denotes the main page that should be loaded for a given path
     For Example, in Expenses folder in routes, index.jsx is expenses/   route 
     Another Example, in Routes folder, index.jsx stands for /    route, so just the main route [your-domain.com/] => index.jsx

2. Layout Routes => Or Layout components are like shared components in Angular that can be placed in the main index and will not be repeated in each component     

3. function Chart({ expenses }) --> Seems to be a databinding input for React components

4. In expenses.jsx file what we want to do is show the ExpenseList component which will be a shared component between $id and add, so we do it here, in this file. And for Semantic reasons we put the Outlet tag outside main and put the ExpenseList in main that will be a shared component. [The Add component will be set as a Modal

5. Public is a special folder, everything inside there is made public by Remix and can be requestabl in a static way by every route (to cut short, instead of public/images/imgpath.png  can be shorten to images/imgpath.png)

6. __name --> Pathless Layout Route => With this we can include the route and its subRoutes that may be included within the Layout of the main route or not (Depends if you want to use them within the Layout route and share the shared components).
This is made for example in the expenses.analysis.jsx route that it is decided to be out of the expenses folder (but still be a subroute because of renamed expenses.analysis.jsx, so its a subroute just in route level and do not share the links() styles and the shared components),but we need to use the links() function for styles from expenses. We put them in __app.jsx and will be included in __app folder.  

7. Resource Routes are Routes which just load data ( loader()) , it doesn't return a component

8. Splat Route => Its like wildcard route, when no other route matches, this activates.

BACKEND

1. We Tell Prisma how our data will look like, by creating a model

2. @id tells Prisma that this field will act as the primary id of the data entry (schema.prisma)

   @default(auto()) -> ensures that the id will be generate automatically  and we don't need to run it manually
   id String .... @map("_id") Ensure that Prisma will add an extra _id field in our MongoDB that will map it with id (in backend we will work with id but in db will be _id)  

   @db.ObjectId -> Internal type used by MongoDB in their db

   @default(now()) -> add the current timestamp when an 'expense is created'