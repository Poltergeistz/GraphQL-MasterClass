import React from 'react';

export default function BreachItem({ 
    breach : { 
    Name,
    Title,
    Domain,
    BreachDate,
    Description,
    PwnCount,
    DataClasses,
    IsSensitive } }) {
            // We check if the prop is correctly passed to the child
            // console.log(props.breach)
            // Return all props elements
            return <div className="ui card">
              <div className="content">
                <div className="header">{Name}</div>
                <div className="meta">
                <a href={Domain}>{Domain}</a>
                <p>Breach date : {BreachDate}</p>
                <p>Users compromised : {PwnCount} </p>
                </div>
                <div className="description">
                {Description}
                </div>
                <div className="ui sub header">Data leaked : { DataClasses.map(data => `| ${data} `)}</div>
                <div className="ui divider"></div>
                <p>Provided by <a href="https://haveibeenpwned.com/">haveibeenpwned.com</a></p>
              </div>
            </div>
    }
