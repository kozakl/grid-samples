import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {AlignContentSample} from '../../pages/align-content-sample';
import {Sample} from '../../pages/sample';
import {AreasSample} from '../../pages/areas-sample';
import {AutoColumnsSample} from '../../pages/auto-columns-sample';
import {BasicSample} from '../../pages/basic-sample';
import {ItemsPositionsSample} from '../../pages/items-positions-sample';
import {LayoutSample} from '../../pages/layout-sample';
import {LinesNameSample} from '../../pages/lines-name-sample';

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
                    <option value="#/areas">Areas</option>
                    <option value="#/auto-column">Auto Column</option>
                    <option value="#/basic-sample">Basic Sample</option>
                    <option value="#/items-positions-sample">Items Positions</option>
                    <option value="#/layout-sample">Layout</option>
                    <option value="#/lines-name-sample">Lines Name</option>
                </select>
                <Switch>
                    <Redirect from="/" to='/align-content' exact/>
                    <Route path="/sample" component={Sample}/>
                    <Route path="/align-content" component={AlignContentSample}/>
                    <Route path="/areas" component={AreasSample}/>
                    <Route path="/auto-column" component={AutoColumnsSample}/>
                    <Route path="/basic-sample" component={BasicSample}/>
                    <Route path="/items-positions-sample" component={ItemsPositionsSample}/>
                    <Route path="/layout-sample" component={LayoutSample}/>
                    <Route path="/lines-name-sample" component={LinesNameSample}/>
                </Switch>
            </>
        </HashRouter>
    );
}
