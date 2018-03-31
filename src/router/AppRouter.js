import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  Home,
  Projects,
  ProjectSingle,
  HireMe,
  PageNotFound
} from "../screens";
import { Navbar } from "../components";

const history = createHistory();

const childFactoryCreator = props => child => React.cloneElement(child, props);

const AppRouter = () => (
  <Router history={history}>
    <div className="AppRouterParent">
      <Navbar />
      <Route
        render={({ location }) => (
          <div className="ScreenTransitionParent">
            <TransitionGroup
              childFactory={childFactoryCreator({
                classNames: "scale",
                timeout: 750
              })}
              component={null}
            >
              <CSSTransition
                key={location.key}
                classNames="scale"
                timeout={750}
              >
                <div className="ScreenTransitionWrapper">
                  <Switch location={location}>
                    <Route component={Home} path="/" exact={true} />
                    <Route component={Projects} path="/sample-projects" />
                    <Route
                      component={ProjectSingle}
                      path="/sample-project/:id"
                    />
                    <Route component={HireMe} path="/hire-me" />
                    <Route component={PageNotFound} />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      />
    </div>
  </Router>
);

export { AppRouter as default, history };
