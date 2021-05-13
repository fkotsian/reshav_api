Getting you started with some resources: 
Let's make an API! https://gist.github.com/andrewhubbs/74084457bf74f136605d0346f932c85b
This is just a starter project, so feel free to add to it as you see fit, but the core components are:
<h2><b>Movie API</b></h2>
<p> An API in Django that hides the API_KEY and makes requests to the movie API
An SPA (single-page app) in React that requests information from the API, and:</p>
<li>Renders a list or grid of movies</li>
<li>Allows searching (new API request) and filtering for movies</li>
<li>Allows clicking on a Movie to see a more detailed view</li>
<li>https://semantic-ui.com/elements/icon.html</li>
<li>https://react.semantic-ui.com/usage/</li>

<p>
Some additional extensions that are germane to what we do here at Narmi:
</p>
<li> Add a caching layer to your app for requests to the Movie API (we do this for all our banking transactions!) </li>
<li> Break out your frontend into Container and Presentational Components using React (we use this pattern in all our new apps) </li>
<li>  Use styled-components to style your React components (we will be using this when working on the design_system!) </li>
<li>  Spin up Storybook to view your React components (we use this in the design_system as well!) </li>
<li> Investigate advanced Python collections for use in the API (I think you had mentioned counter!) </li>
<br/>
<p>
That should be a good bit to get you started on the right foot here! I've created a blank repo for you here: https://github.com/fkotsian/reshav_api
</p>
<p>
Feel free to clone that and let me know when you've got a PR up (as big or small as you like), and I'll take a look! It's a bit different than how we'll work on the team, but my general principles are:
Each PR should represent a feature
Refactor inside your PRs ('be a good citizen')
Add tests and practice TDD if you like!
</p>