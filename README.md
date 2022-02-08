## Overview

Simple Time Tracking Dashboard build with HTML, CSS and JS

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

<img width="1439" alt="Screen Shot 2022-02-05 at 5 24 06 AM" src="https://user-images.githubusercontent.com/38982708/152989337-5291ad2a-cd47-4a02-8b3f-06bc0ca71446.png">

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-time-tracking-dashboard-using-css-grid-tubGD82jx](https://www.frontendmentor.io/solutions/responsive-time-tracking-dashboard-using-css-grid-tubGD82jx)
- Live Site URL: [https://fm-time-tracking.vercel.app/](https://fm-time-tracking.vercel.app/)

## My process

- Add the markup
- Add styling
- Consume json data
- Add dynamics
- Add transition/animation

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- using the 'grid-template-columns'
- using 'fetch' api to get the data in json
- using the onLoad event
- making a reusable function

```css
.element {
  grid-template-columns: 240px repeat(200px);
}
```

```js
fetch('url')
  .then((data) => data.json())
  .then((data) => console.log(data))
```

### Continued development

- CSS fundamentals
- JS fundamentals
- be comfortable on starting from scratch

## Author

- Frontend Mentor - [@ejllovido](https://www.frontendmentor.io/profile/ejllovido)
- Twitter - [@ericxllovido](https://www.twitter.com/ericxllovido)
