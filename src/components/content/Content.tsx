import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {Sample} from '../../pages/sample';

export default function Content()
{
    return (
        <HashRouter>
            <>
                <select
                    onChange={(event)=>
                        window.location.href = event.target.value}>
                    <option value="#/sample">Sample</option>
                </select>
                <Switch>
                    <Redirect from="/" to='/sample' exact/>
                    <Route path="/sample" component={Sample}/>
                </Switch>
            </>
        </HashRouter>
    );
}
