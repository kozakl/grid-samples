import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {AlignContentSample} from '../../pages/align-content-sample';
import {Sample} from '../../pages/sample';

export default function Content()
{
    return (
        <HashRouter>
            <>
                <select
                    style={{position: 'fixed', top: '0'}}
                    onChange={(event)=>
                        window.location.href = event.target.value}>
                    <option value="#/align-content">Align Content</option>
                    <option value="#/sample">Sample</option>
                </select>
                <Switch>
                    <Redirect from="/" to='/align-content' exact/>
                    <Route path="/sample" component={Sample}/>
                    <Route path="/align-content" component={AlignContentSample}/>
                </Switch>
            </>
        </HashRouter>
    );
}
