import { asyncPipe } from "./create-route";

import withAuth from "../hocs/with-auth";
import withRequestId from "../hocs/with-request-id";
import withLogger from "../hocs/with-logger";

const defaultMiddleware = asyncPipe(withAuth, withRequestId, withLogger);

export default defaultMiddleware;
