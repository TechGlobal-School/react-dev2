# React JS

- Open source
- Developed by Facebook (Meta)
- Used to create SPA
- Influenced by FaxJS, XHP, PHP
- We can kick start React app in many ways:
  1. Using CDN from scratch (https://legacy.reactjs.org/docs/cdn-links.html)
  2. Integrate React to existing app (https://react.dev/learn/add-react-to-an-existing-project)
  3. Via Production-grade React frameworks (https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks)
- Using Create React App (https://create-react-app.dev/)

- Virtual DOM
- JSX
  - Needs to have 1 parent element
  - We can use <></> or <React.Fragment></React.Fragment> if you want avoid using other elements
  - Inject variables and other jsx elements
- Styling: external css file, inline with style={{}} or internal css object or use css libraries like tailwind etc.
- Props (shorthand for properties)
  - Every component has by default empty props object
  - Props can be passed in way direction (parent -> child)
  - Props can't be modified
