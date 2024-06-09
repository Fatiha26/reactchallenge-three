import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let curTime = new Date();
curTime = curTime.getHours();
let greeting = '';

const cssStyle = {};

if(curTime >= 1 && curTime <12)
{
    greeting = 'GOOD Morning!';
    cssStyle.color = 'green';
}
else if(curTime >= 12 && curTime <19)
{
  greeting = 'GOOD EVENING!';
  cssStyle.color = '#e67e22';
}
else
{
  greeting = 'GOOD NIGHT!'
  cssStyle.color = 'blue';

}

root.render(
  <>
    <div>
       <h1>Hey There, <span style={cssStyle}>{greeting}</span> </h1>
    </div>
  </>
);

