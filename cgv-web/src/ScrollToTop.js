import { PureComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

class ScrollToTop extends PureComponent<RouteComponentProps> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      // setTimeout(() => {
      //   window.scrollTo(0, 0);
      // }, 300);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
