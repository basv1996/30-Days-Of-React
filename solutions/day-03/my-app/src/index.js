import React from 'react'
import ReactDOM from 'react-dom'

import firstModule from './module1'

//const jsxElement = <h1>This is a JSX Element</h1>
//const title = <h2>Getting started React</h2>

const welcome = 'Welcome to 30 days of react'
const title = 'getting started react'
const subtitle = 'javascript library'
const author = {
  firstName: 'voornaampje',
  lastName: 'achternaampje'
}

const date = 'oct 2, 2022'

const header = (
  <header className='headerStyles'>
    {firstModule}
    <h1>{welcome}</h1>
    <h2> {title}</h2>
    <h3>{subtitle}</h3>
    <p>de naam is: {author.firstName} {author.lastName}</p>
    <small>5 september, 2022</small>
  </header>
)

const mainStyles = {
  backgroundColor: '#f3F0f5'
}

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const main = (
  <main style={mainStyles}>
    <p>prequisite to get started with react.js</p>
    <ul>{techsFormatted}</ul>
    {result}
    {personAge}
  </main>
)


const footerStyles = {
  backgroundColor: '#61DBFB',
}
// JSX element, footer
const footer = (
  <footer style={footerStyles}>
    <p>CopyLeft {currentYear}</p>
  </footer>
)

const app = (
  <>
  {header}
  {main}
  {footer}
  </>
)


const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)