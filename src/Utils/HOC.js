import Button from "../components/Button";
export const FlexColumn = (Component) => (props) =>
  (
    <Component
      {...props}
      className="d-flex justify-content-center align-items-center flex-column flex-wrap"
    />
  );

export const FlexRow = (Component) => (props) =>
  (
    <Component
      {...props}
      className="d-flex justify-content-center align-items-center flex-row flex-wrap"
    />
  );

export const WithHeads =
  (Component) => (headOne) => (headTwo) => (path) => (align) => (props) =>
    (
      <div className="mt-3 py-5 border-pale">
        <div className="container">
          <h3 className={`fw-bold mb-3 text-${align} big-head-2`}>{headOne}</h3>
          <h2 className={`fw-bold mb-3 text-${align} big-head-1`}>{headTwo}</h2>
          <Component {...props} />
          <div className={`text-${align}`}>
            <Button
              path={`/${path}`}
              text="View All"
              className="user-btn"
              type="button"
            />
          </div>
        </div>
      </div>
    );
